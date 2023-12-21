import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './CarouselButtons_TypeLeftStateD.module.css';
import { Vector1002Icon } from './Vector1002Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 2:1468 */
export const CarouselButtons_TypeLeftStateD: FC<Props> = memo(function CarouselButtons_TypeLeftStateD(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector1002}>
        <Vector1002Icon className={classes.icon} />
      </div>
    </button>
  );
});
