import { renderOgImage, ogImageSize } from '@/lib/ogImage';

export const dynamic = 'force-static';
export const alt = 'About Us | Webersol';
export const size = ogImageSize;
export const contentType = 'image/png';

export default function Image() {
  return renderOgImage('Engineers Who Build for the Long Run');
}
