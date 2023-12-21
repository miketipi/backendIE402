import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Star1Icon } from './Star1Icon.js';
import { Star2Icon } from './Star2Icon.js';
import { Star3Icon } from './Star3Icon.js';
import { Star4Icon } from './Star4Icon.js';
import { Star5Icon } from './Star5Icon.js';
import classes from './StarRating_Rating5Star.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:1485 */
export const StarRating_Rating5Star: FC<Props> = memo(function StarRating_Rating5Star(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.star1}>
        <Star1Icon className={classes.icon} />
      </div>
      <div className={classes.star3}>
        <Star3Icon className={classes.icon2} />
      </div>
      <div className={classes.star5}>
        <Star5Icon className={classes.icon3} />
      </div>
      <div className={classes.star2}>
        <Star2Icon className={classes.icon4} />
      </div>
      <div className={classes.star4}>
        <Star4Icon className={classes.icon5} />
      </div>
    </div>
  );
});
