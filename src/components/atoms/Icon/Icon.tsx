import * as React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
// eslint-disable-next-line no-unused-vars
import { ICON_SIZE, SizeType } from './IconTypes';

export const ICON_CLASSNAME = 'iconSvg';
export const WRAP_CLASSNAME = 'wrapSvg';

type Props = {
    type: string;
    fill?: string;
    size?: SizeType;
  };

type ComponentProps = {
    className: typeof ICON_CLASSNAME | typeof WRAP_CLASSNAME;
    size: SizeType;
  };

const IconComponent = styled.span<ComponentProps>`
  display: inline-block;
`;

const replaceFillInSVG = (code: string, fill: string) => (fill !== 'none'
  ? code
    .replace(/fill="[^none].*?"/g, `fill="${fill}"`)
    .replace(/stroke=".*?"/g, `stroke="${fill}"`)
  : code);

export const Icon = ({
  type,
  fill = 'none',
  size = ICON_SIZE.xs,
}: React.PropsWithChildren<Props>) => {
  const correctSize = Object.values(ICON_SIZE).includes(size)
    ? size
    : ICON_SIZE.xs;

  return (
    <IconComponent size={correctSize} className={WRAP_CLASSNAME}>
      {type === 'none' ? (
        <IconComponent size={correctSize} className={ICON_CLASSNAME} />
      ) : (
        <SVG
          src={type}
          className={ICON_CLASSNAME}
          height={correctSize}
          width={correctSize}
          preProcessor={(code) => replaceFillInSVG(code, fill)}
          cacheRequests
        />
      )}
    </IconComponent>
  );
};

Icon.displayName = 'Icon';
