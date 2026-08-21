import { renderOgImage, ogImageSize } from '@/lib/ogImage';

export const dynamic = 'force-static';
export const alt = 'Marketing Services | Webersol';
export const size = ogImageSize;
export const contentType = 'image/png';

export default function Image() {
  return renderOgImage('Every Marketing Channel, One Accountable Team');
}
