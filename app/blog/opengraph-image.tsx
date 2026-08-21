import { renderOgImage, ogImageSize } from '@/lib/ogImage';

export const dynamic = 'force-static';
export const alt = 'Blog | Webersol';
export const size = ogImageSize;
export const contentType = 'image/png';

export default function Image() {
  return renderOgImage('Engineering, AI, and Growth, Explained');
}
