import { React, useEffect, useState } from '../../lib/react.js';
import Button from '../ui/Button.jsx';
import Window from '../ui/Window.jsx';

export default function PopupWindow({ popup, onChoice }) {
  const [countdown, setCountdown] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          onChoice(popup, popup.isLegit ? 'reject' : 'accept');
          return 100;
        }
        return prev - 0.8;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [popup, onChoice]);

  const swapped = popup.swapped;
  let title;
  let warning;
  let warningColor;

  if (popup.type === 'firewall') {
    title = '🛡️ Connection Request';
    warning = '⚠️ Unknown signature!';
    warningColor = '#d44';
  } else if (popup.type === 'security-update') {
    title = '🔒 Security Patch';
    warning = '✓ Verified - INSTALL!';
    warningColor = '#484';
  } else {
    title = '📦 Update Available';
    warning = '⚠️ Checksum mismatch!';
    warningColor = '#d44';
  }

  const getButtons = () => {
    if (popup.type === 'firewall') {
      return swapped
        ? [
            { l: '[Q] Deny', a: 'deny', v: 'default' },
            { l: '[E] Allow', a: 'allow', v: 'primary' },
          ]
        : [
            { l: '[E] Allow', a: 'allow', v: 'default' },
            { l: '[Q] Deny', a: 'deny', v: 'primary' },
          ];
    }
    if (popup.type === 'security-update') {
      return swapped
        ? [
            { l: '[E] Skip', a: 'reject', v: 'primary' },
            { l: '[Q] Install', a: 'accept', v: 'default' },
          ]
        : [
            { l: '[Q] Install', a: 'accept', v: 'primary' },
            { l: '[E] Skip', a: 'reject', v: 'default' },
          ];
    }
    return swapped
      ? [
          { l: '[Q] Later', a: 'later', v: 'default' },
          { l: '[E] Install', a: 'install', v: 'primary' },
        ]
      : [
          { l: '[E] Install', a: 'install', v: 'default' },
          { l: '[Q] Later', a: 'later', v: 'primary' },
        ];
  };

  const btns = getButtons();

  return (
    <div style={{ position: 'absolute', left: popup.x, top: popup.y, zIndex: 400 }}>
      <Window title={title} width={260}>
        <p style={{ fontSize: 7, marginBottom: 8 }}>
          {popup.type === 'firewall'
            ? 'Unknown process requests access.'
            : popup.type === 'security-update'
              ? 'Critical security update.'
              : 'System update available.'}
        </p>
        <p style={{ fontSize: 7, color: warningColor, marginBottom: 10, fontWeight: popup.isLegit ? 'bold' : 'normal' }}>
          {warning}
        </p>

        <div style={{ width: '100%', height: 6, background: '#ddd', borderRadius: 3, marginBottom: 14 }}>
          <div
            style={{
              width: `${countdown}%`,
              height: '100%',
              background: countdown > 30 ? '#5a5' : '#d55',
              borderRadius: 3,
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <Button variant={btns[0].v} onClick={() => onChoice(popup, btns[0].a)}>
            {btns[0].l}
          </Button>
          <Button variant={btns[1].v} onClick={() => onChoice(popup, btns[1].a)}>
            {btns[1].l}
          </Button>
        </div>
      </Window>
    </div>
  );
}

