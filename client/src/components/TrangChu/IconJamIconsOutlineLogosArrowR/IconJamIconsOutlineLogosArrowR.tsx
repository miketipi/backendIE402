import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconJamIconsOutlineLogosArrowR.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 2:1964 */
export const IconJamIconsOutlineLogosArrowR: FC<Props> = memo(function IconJamIconsOutlineLogosArrowR(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
    </div>
  );
});
