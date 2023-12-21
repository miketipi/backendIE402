import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconJamIconsOutlineLogosArrowR } from '../IconJamIconsOutlineLogosArrowR/IconJamIconsOutlineLogosArrowR';
import { IconJamIconsOutlineLogosPlus } from '../IconJamIconsOutlineLogosPlus/IconJamIconsOutlineLogosPlus';
import classes from './Button_StyleFilledSizeMBrand.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  hide?: {
    iconJamIconsOutlineLogosPlus?: boolean;
  };
  text?: {
    buttonText?: ReactNode;
  };
}
/* @figmaId 2:1805 */
export const Button_StyleFilledSizeMBrand: FC<Props> = memo(function Button_StyleFilledSizeMBrand(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      {!props.hide?.iconJamIconsOutlineLogosPlus && (
        <IconJamIconsOutlineLogosPlus
          className={classes.iconJamIconsOutlineLogosPlus}
          swap={{
            vector: <VectorIcon className={classes.icon} />,
          }}
        />
      )}
      <div className={classes.textContainer}>
        {props.text?.buttonText != null ? (
          props.text?.buttonText
        ) : (
          <div className={classes.buttonText}>Button Text</div>
        )}
      </div>
    </button>
  );
});
