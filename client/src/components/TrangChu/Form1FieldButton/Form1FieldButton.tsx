import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Button_StyleFilledSizeMBrand } from '../Button_StyleFilledSizeMBrand/Button_StyleFilledSizeMBrand';
import { Field_StateDefaultTextareaFals } from '../Field_StateDefaultTextareaFals/Field_StateDefaultTextareaFals';
import classes from './Form1FieldButton.module.css';

interface Props {
  className?: string;
  hide?: {
    iconJamIconsOutlineLogosChevro?: boolean;
    iconJamIconsOutlineLogosPlus?: boolean;
  };
  text?: {
    text?: ReactNode;
    buttonText?: ReactNode;
  };
}
/* @figmaId 2:1745 */
export const Form1FieldButton: FC<Props> = memo(function Form1FieldButton(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Field_StateDefaultTextareaFals
        className={classes.field}
        hide={{
          iconJamIconsOutlineLogosChevro: true,
        }}
        text={{
          text: props.text?.text || <div className={classes.text}>Enter your email to get the latest news...</div>,
        }}
      />
      <Button_StyleFilledSizeMBrand
        hide={{
          iconJamIconsOutlineLogosPlus: true,
        }}
        text={{
          buttonText: props.text?.buttonText || <div className={classes.buttonText}>Subscribe</div>,
        }}
      />
    </div>
  );
});
