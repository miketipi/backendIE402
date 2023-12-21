import { memo, SVGProps } from 'react';

const Star5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.9655 2.92705C15.2649 2.00574 16.5683 2.00574 16.8676 2.92705L19.0785 9.73134C19.2124 10.1434 19.5963 10.4223 20.0295 10.4223H27.184C28.1527 10.4223 28.5555 11.6619 27.7718 12.2313L21.9837 16.4366C21.6332 16.6913 21.4866 17.1426 21.6204 17.5547L23.8313 24.359C24.1306 25.2803 23.0762 26.0464 22.2924 25.477L16.5044 21.2717C16.1539 21.0171 15.6793 21.0171 15.3288 21.2717L9.54072 25.477C8.75701 26.0464 7.70253 25.2803 8.00188 24.359L10.2127 17.5547C10.3466 17.1426 10.1999 16.6913 9.84946 16.4366L4.06138 12.2313C3.27767 11.6619 3.68044 10.4223 4.64917 10.4223H11.8036C12.2368 10.4223 12.6208 10.1434 12.7547 9.73134L14.9655 2.92705Z'
      stroke='#070707'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Star5Icon);
export { Memo as Star5Icon };
