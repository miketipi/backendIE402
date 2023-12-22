import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconJamIconsOutlineLogosChevro } from '../IconJamIconsOutlineLogosChevro/IconJamIconsOutlineLogosChevro';
import { IconJamIconsOutlineLogosSearch } from '../IconJamIconsOutlineLogosSearch/IconJamIconsOutlineLogosSearch';
import classes from './Field_StateDefaultTextareaFals.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    iconJamIconsOutlineLogosChevro?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 2:1749 */
export const Field_StateDefaultTextareaFals: FC<Props> = memo(function Field_StateDefaultTextareaFals(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <IconJamIconsOutlineLogosSearch
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Placeholder</div>}
      {!props.hide?.iconJamIconsOutlineLogosChevro && (
        <IconJamIconsOutlineLogosChevro
          swap={{
            vector: <VectorIcon2 className={classes.icon2} />,
          }}
        />
      )}
    </div>
  );
});
