import { React } from '../../lib/react.js';

export default function Window({ title, width = 300, children, x, y }) {
  return (
    <div
      style={{
        position: x !== undefined ? 'absolute' : 'relative',
        left: x,
        top: y,
        width,
        background: '#f4f4f4',
        color: '#111',
        border: '2px solid #444',
        borderRadius: 6,
        boxShadow: '6px 6px 0 rgba(0,0,0,0.25)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: 18,
          background: 'linear-gradient(180deg, #f0f0f0 0%, #d2d2d2 100%)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 6px',
          gap: 6,
        }}
      >
        <div style={{ width: 10, height: 10, background: '#e55', border: '1px solid #b33', borderRadius: 2 }} />
        <span style={{ fontSize: 8, color: '#111', fontWeight: 'bold' }}>{title}</span>
      </div>
      <div style={{ padding: 10 }}>{children}</div>
    </div>
  );
}
