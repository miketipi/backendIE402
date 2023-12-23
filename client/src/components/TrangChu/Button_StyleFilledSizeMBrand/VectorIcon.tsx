import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.4 6.4V1.4C8.4 1.13478 8.29464 0.88043 8.10711 0.692893C7.91957 0.505357 7.66522 0.4 7.4 0.4C7.13478 0.4 6.88043 0.505357 6.69289 0.692893C6.50536 0.88043 6.4 1.13478 6.4 1.4V6.4H1.4C1.13478 6.4 0.88043 6.50536 0.692893 6.69289C0.505357 6.88043 0.4 7.13478 0.4 7.4C0.4 7.66522 0.505357 7.91957 0.692893 8.10711C0.88043 8.29464 1.13478 8.4 1.4 8.4H6.4V13.4C6.4 13.6652 6.50536 13.9196 6.69289 14.1071C6.88043 14.2946 7.13478 14.4 7.4 14.4C7.66522 14.4 7.91957 14.2946 8.10711 14.1071C8.29464 13.9196 8.4 13.6652 8.4 13.4V8.4H13.4C13.6652 8.4 13.9196 8.29464 14.1071 8.10711C14.2946 7.91957 14.4 7.66522 14.4 7.4C14.4 7.13478 14.2946 6.88043 14.1071 6.69289C13.9196 6.50536 13.6652 6.4 13.4 6.4H8.4Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };