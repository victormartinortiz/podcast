import slugify from 'slugify';

export default function slug(string) {
  return slugify(string, {
    lower: true
  }).replace(/[^\w\-]+/g, '');
}
