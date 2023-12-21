import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 135 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M130 0H5C2.23858 0 0 2.23858 0 5V35C0 37.7614 2.23858 40 5 40H130C132.761 40 135 37.7614 135 35V5C135 2.23858 132.761 0 130 0Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
