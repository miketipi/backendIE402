import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.046 3.865V6.613H0.0320001V9.973H2.046V19.959H6.18V9.974H8.955C8.955 9.974 9.215 8.363 9.341 6.601H6.197V4.303C6.197 3.96 6.647 3.498 7.093 3.498H9.347V0H6.283C1.943 0 2.046 3.363 2.046 3.865V3.865Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
