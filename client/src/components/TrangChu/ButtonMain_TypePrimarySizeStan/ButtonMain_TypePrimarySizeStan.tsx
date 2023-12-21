import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Icons_IconPlus } from '../Icons_IconPlus/Icons_IconPlus';
import classes from './ButtonMain_TypePrimarySizeStan.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:649 */
export const ButtonMain_TypePrimarySizeStan: FC<Props> = memo(function ButtonMain_TypePrimarySizeStan(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.label}>Label</div>
    </button>
  );
});
