import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_StyleOutlineSizeMBrandG.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon6 } from './VectorIcon6.js';
import { VectorIcon7 } from './VectorIcon7.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  text?: {
    gETITON?: ReactNode;
  };
}
/* @figmaId 2:1885 */
export const Button_StyleOutlineSizeMBrandG: FC<Props> = memo(function Button_StyleOutlineSizeMBrandG(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon2} />
      </div>
      {props.text?.gETITON != null ? props.text?.gETITON : <div className={classes.gETITON}>GET IT ON</div>}
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon3} />
      </div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon4} />
      </div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon5} />
      </div>
      <div className={classes.vector6}>
        <VectorIcon6 className={classes.icon6} />
      </div>
      <div className={classes.vector7}>
        <VectorIcon7 className={classes.icon7} />
      </div>
    </button>
  );
});
