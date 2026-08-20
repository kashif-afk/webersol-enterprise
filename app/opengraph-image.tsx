import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const dynamic = 'force-static';
export const alt = 'Webersol — AI Automation & Software Engineering';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  const logoData = readFileSync(join(process.cwd(), 'public/logo.png')).toString('base64');
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B0F17',
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(43,132,173,0.35) 0%, transparent 55%), radial-gradient(circle at 85% 80%, rgba(245,146,13,0.25) 0%, transparent 55%)',
          position: 'relative',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={340} height={340} alt="" style={{ objectFit: 'contain' }} />
        <div
          style={{
            marginTop: 24,
            fontSize: 40,
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: -1,
            display: 'flex',
          }}
        >
          Architecting Autonomous AI &amp; Enterprise Web Infrastructure
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 24,
            color: '#4FB3DE',
            display: 'flex',
          }}
        >
          webersol.com
        </div>
      </div>
    ),
    { ...size }
  );
}
