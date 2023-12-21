import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.49 3.5L6.31 0.5L0.49 5.69L6.33 11.54L11.48 8.54C11.9378 8.29482 12.3205 7.93001 12.5873 7.48446C12.8541 7.03891 12.995 6.52932 12.995 6.01C12.995 5.49068 12.8541 4.98109 12.5873 4.53554C12.3205 4.08999 11.9378 3.72518 11.48 3.48L11.49 3.5Z'
      fill='#FBBC04'
    />
  </svg>
);
const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
