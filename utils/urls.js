import { prefixLink as f } from 'gatsby-helpers';
export function prefixLink (x) {
  if (x.match(/^http/)) return x;
  if (x[0] === '/') return f(x);
  return f('/' + x);
}
