import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.812 0.0169998H4.145C1.855 0.0169998 0 1.852 0 4.116V9.884C0 12.148 1.856 13.984 4.145 13.984H15.812C18.102 13.984 19.957 12.148 19.957 9.884V4.116C19.957 1.852 18.101 0.0159998 15.812 0.0159998V0.0169998ZM13.009 7.28L7.552 9.855C7.51872 9.87102 7.48192 9.87837 7.44503 9.87635C7.40815 9.87434 7.37237 9.86302 7.34103 9.84346C7.3097 9.8239 7.28382 9.79673 7.2658 9.76448C7.24779 9.73222 7.23822 9.69594 7.238 9.659V4.35C7.23867 4.31287 7.24872 4.27652 7.26722 4.24432C7.28573 4.21213 7.31208 4.18514 7.34382 4.16588C7.37556 4.14661 7.41167 4.13569 7.44877 4.13414C7.48587 4.13259 7.52276 4.14045 7.556 4.157L13.014 6.892C13.0504 6.91013 13.0809 6.93814 13.102 6.97283C13.1232 7.00751 13.1341 7.04745 13.1336 7.08807C13.1331 7.12869 13.1211 7.16834 13.0991 7.20246C13.077 7.23659 13.0458 7.26381 13.009 7.281V7.28Z'
      fill='#21272A'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
