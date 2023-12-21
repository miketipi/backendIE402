import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconJamIconsOutlineLogosYoutub.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 2:2015 */
export const IconJamIconsOutlineLogosYoutub: FC<Props> = memo(function IconJamIconsOutlineLogosYoutub(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
    </div>
  );
});
