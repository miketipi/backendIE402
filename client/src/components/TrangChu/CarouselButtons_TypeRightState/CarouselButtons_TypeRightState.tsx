import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './CarouselButtons_TypeRightState.module.css';
import { Vector1002Icon } from './Vector1002Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 2:1470 */
export const CarouselButtons_TypeRightState: FC<Props> = memo(function CarouselButtons_TypeRightState(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector1002}>
        <Vector1002Icon className={classes.icon} />
      </div>
    </button>
  );
});
