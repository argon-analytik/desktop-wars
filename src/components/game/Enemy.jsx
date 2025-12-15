import { React } from '../../lib/react.js';
import { SPRITES } from '../../assets/manifest.js';
import Sprite from '../shared/Sprite.jsx';
import SpriteSheet from '../shared/SpriteSheet.jsx';

export default function Enemy({ type, x, y, size, stunned, isHit, frame, flipX = false }) {
  const spriteSrc =
    type === 'regi-mite'
      ? SPRITES.enemyRegiMite
      : type === 'popup-gremlin'
        ? SPRITES.enemyPopupGremlin
        : type === 'spy-dot'
          ? SPRITES.enemySpyDot
          : null;

  const style = {
    position: 'absolute',
    left: x - size / 2,
    top: y - size / 2,
    width: size,
    height: size,
    opacity: stunned > 0 ? 0.5 : 1,
    filter: isHit ? 'brightness(2)' : 'none',
    pointerEvents: 'none',
  };

  if (type === 'regi-mite') {
    const baseFrame = Number.isFinite(frame) ? frame : 0;
    const frameIndex = Math.floor(baseFrame) % 16;
    return (
      <div style={style}>
        <div style={{ width: size, height: size, transform: flipX ? 'scaleX(-1)' : undefined, transformOrigin: 'center' }}>
          <SpriteSheet
            src={spriteSrc}
            width={size}
            height={size}
            frameWidth={32}
            frameHeight={32}
            columns={4}
            rows={4}
            marginX={16}
            marginY={16}
            spacingX={32}
            spacingY={32}
            frameIndex={frameIndex}
            fallback={
              <Sprite
                src={spriteSrc}
                width={size}
                height={size}
                style={{ width: size, height: size }}
                fallback={
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(180deg, #f0e8d8 0%, #e8dcc8 100%)',
                      border: '2px solid #888',
                      borderRadius: 3,
                    }}
                  >
                    <div style={{ height: 5, background: '#889', borderRadius: '2px 2px 0 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 3, marginTop: 3 }}>
                      <div style={{ width: 4, height: 4, background: '#333', borderRadius: '50%' }} />
                      <div style={{ width: 4, height: 4, background: '#333', borderRadius: '50%' }} />
                    </div>
                  </div>
                }
              />
            }
          />
        </div>
      </div>
    );
  }

  if (type === 'popup-gremlin') {
    const baseFrame = Number.isFinite(frame) ? frame : 0;
    const bounce = Math.sin(baseFrame * 3) * 4;
    const wobble = Math.sin(baseFrame * 5) * 8;
    const frameIndex = Math.floor(baseFrame) % 16;
    return (
      <div
        style={{
          ...style,
          transform: `translateY(${bounce}px) rotate(${wobble}deg) scale(${1 + Math.sin(baseFrame * 4) * 0.15})`,
        }}
      >
        <SpriteSheet
          src={spriteSrc}
          width={size}
          height={size}
          frameWidth={32}
          frameHeight={32}
          columns={4}
          rows={4}
          marginX={16}
          marginY={16}
          spacingX={32}
          spacingY={32}
          frameIndex={frameIndex}
          fallback={
            <Sprite
              src={spriteSrc}
              width={size}
              height={size}
              style={{ width: size, height: size }}
              fallback={
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(180deg, #ffe0e0 0%, #ffb0b0 100%)',
                    border: '2px solid #d66',
                    borderRadius: 3,
                    boxShadow: '0 0 8px rgba(255,100,100,0.5)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: 3 }}>
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        background: '#800',
                        borderRadius: '50%',
                        transform: `rotate(${baseFrame * 20}deg)`,
                      }}
                    />
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        background: '#800',
                        borderRadius: '50%',
                        transform: `rotate(${-baseFrame * 20}deg)`,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: 10,
                      height: 5,
                      margin: '2px auto',
                      background: '#800',
                      borderRadius: '0 0 6px 6px',
                    }}
                  />
                </div>
              }
            />
          }
        />
      </div>
    );
  }

  if (type === 'spy-dot') {
    const baseFrame = Number.isFinite(frame) ? frame : 0;
    const frameIndex = Math.floor(baseFrame) % 16;
    return (
      <div style={{ ...style, animation: 'blink 0.7s infinite' }}>
        <SpriteSheet
          src={spriteSrc}
          width={size}
          height={size}
          frameWidth={32}
          frameHeight={32}
          columns={4}
          rows={4}
          marginX={16}
          marginY={16}
          spacingX={32}
          spacingY={32}
          frameIndex={frameIndex}
          fallback={
            <Sprite
              src={spriteSrc}
              width={size}
              height={size}
              style={{ width: size, height: size }}
              fallback={
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: '#f00',
                    borderRadius: '50%',
                    boxShadow: '0 0 6px #f00',
                  }}
                />
              }
            />
          }
        />
      </div>
    );
  }

  return null;
}
