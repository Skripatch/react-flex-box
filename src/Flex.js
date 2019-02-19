import React from 'react';

const TAG_NAME = 'div';
const CONTAINER = 'row_flex-start_flex-start';
const ITEM = '1_1_auto';
const EMPTY = '';
export const Flex = ({
  className,
  children,
  tagName = TAG_NAME,
  container = CONTAINER,
  item = ITEM,
  style = {},
  ...props,
}) => {
  const TagName = tagName;
  const [ flexDirection, justifyContent, alignItems, flexWrap ] = container.toLowerCase().split('_');
  const [ flexGrow, flexShrink, flexBasis, justifySelf, alignSelf ] = item.toLowerCase().split('_');
  const display = container !== EMPTY ? 'flex' : 'initial';
  const combinedStyles = {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    flexGrow,
    flexShrink,
    flexBasis,
    justifySelf,
    alignSelf,
    ...style
  };
  return <TagName {...props} className={className} style={combinedStyles}>{children}</TagName>;
};
