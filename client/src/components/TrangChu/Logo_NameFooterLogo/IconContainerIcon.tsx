import { memo, SVGProps } from 'react';

const IconContainerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 0V24H24V0H0ZM3.41421 2L12 10.5858L20.5858 2H3.41421ZM22 3.41421L13.4142 12L22 20.5858V3.41421ZM20.5858 22L12 13.4142L3.41421 22H20.5858ZM2 20.5858L10.5858 12L2 3.41421V20.5858Z'
      fill='#DDE1E6'
    />
  </svg>
);
const Memo = memo(IconContainerIcon);
export { Memo as IconContainerIcon };
