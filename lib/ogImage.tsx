import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const ogImageSize = { width: 1200, height: 630 };

let cachedLogoSrc: string | null = null;
function getLogoSrc() {
  if (!cachedLogoSrc) {
    const logoData = readFileSync(join(process.cwd(), 'public/logo.png')).toString('base64');
    cachedLogoSrc = `data:image/png;base64,${logoData}`;
  }
  return cachedLogoSrc;
}

export function renderOgImage(headline: string) {
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
        <img src={getLogoSrc()} width={260} height={260} alt="" style={{ objectFit: 'contain' }} />
        <div
          style={{
            marginTop: 24,
            fontSize: 44,
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: -1,
            display: 'flex',
            maxWidth: 900,
            textAlign: 'center',
          }}
        >
          {headline}
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
    { ...ogImageSize }
  );
}
