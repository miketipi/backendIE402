import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Badge_SizeXXSDotFalseRemoveBut.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:1983 */
export const Badge_SizeXXSDotFalseRemoveBut: FC<Props> = memo(function Badge_SizeXXSDotFalseRemoveBut(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.text}>99+</div>
    </div>
  );
});
