import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_StyleFilledSizeMBrandAp.module.css';
import { GroupIcon } from './GroupIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 2:1894 */
export const Button_StyleFilledSizeMBrandAp: FC<Props> = memo(function Button_StyleFilledSizeMBrandAp(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.group}>
        <GroupIcon className={classes.icon} />
      </div>
    </button>
  );
});
