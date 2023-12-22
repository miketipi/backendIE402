import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconJamIconsOutlineLogosInstag.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  swap?: {
    vector?: ReactNode;
    vector2?: ReactNode;
    vector3?: ReactNode;
  };
}
/* @figmaId 2:2021 */
export const IconJamIconsOutlineLogosInstag: FC<Props> = memo(function IconJamIconsOutlineLogosInstag(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
      <div className={classes.vector2}>{props.swap?.vector2 || <VectorIcon2 className={classes.icon2} />}</div>
      <div className={classes.vector3}>{props.swap?.vector3 || <VectorIcon3 className={classes.icon3} />}</div>
    </div>
  );
});
