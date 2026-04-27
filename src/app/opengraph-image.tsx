import { ImageResponse } from 'next/og';

export const alt = 'Nonthpat Wongkham - Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1e3a8a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
          padding: '48px'
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 'bold', letterSpacing: '-1px' }}>Nonthpat Wongkham</div>
        <div style={{ fontSize: 36, marginTop: 20, color: '#93c5fd' }}>Database Admin · Software Engineer</div>
        <div
          style={{
            marginTop: 40,
            display: 'flex',
            gap: '16px',
            fontSize: 22,
            color: '#bfdbfe'
          }}
        >
          <span>SQL</span>
          <span>·</span>
          <span>Kotlin</span>
          <span>·</span>
          <span>Java</span>
          <span>·</span>
          <span>NodeJS</span>
          <span>·</span>
          <span>NextJS</span>
        </div>
      </div>
    ),
    size
  );
}
