import { React } from '../../lib/react.js';

export default function Button({ onClick, children, disabled = false, variant = 'default' }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '6px 16px',
        fontSize: 8,
        fontFamily: '"Press Start 2P", monospace',
        background:
          variant === 'primary'
            ? 'linear-gradient(180deg, #5a5 0%, #494 100%)'
            : 'linear-gradient(180deg, #eee 0%, #ccc 100%)',
        border: '2px solid',
        borderColor: variant === 'primary' ? '#373 #252 #252 #373' : '#aaa #777 #777 #aaa',
        borderRadius: 4,
        cursor: disabled ? 'not-allowed' : 'pointer',
        color: variant === 'primary' ? '#fff' : '#333',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {children}
    </button>
  );
}

