import { renderOgImage, ogImageSize } from '@/lib/ogImage';

export const dynamic = 'force-static';
export const alt = 'Careers | Webersol';
export const size = ogImageSize;
export const contentType = 'image/png';

export default function Image() {
  return renderOgImage('Build Systems That Actually Ship');
}
