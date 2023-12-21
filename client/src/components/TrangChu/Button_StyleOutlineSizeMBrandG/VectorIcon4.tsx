import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.72 0.42L0.0699997 11.72C0.186343 12.1474 0.399374 12.5423 0.692638 12.8743C0.985902 13.2063 1.35155 13.4664 1.76134 13.6346C2.17113 13.8027 2.61409 13.8744 3.056 13.8442C3.49792 13.8139 3.92697 13.6825 4.31 13.46V13.46L16.31 6.54L10.72 0.42Z'
      fill='#EA4335'
    />
  </svg>
);
const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
