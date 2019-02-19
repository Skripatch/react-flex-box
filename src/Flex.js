import React from 'react';

const TAG_NAME = 'div';
const CONTAINER = 'row-flexStart-flexStart';
const ITEM = '1-1-auto';
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
  const [ flexDirection, justifyContent, alignItems, flexWrap ] = container.split('-');
  const [ flexGrow, flexShrink, flexBasis, justifySelf, alignSelf ] = item.split('-');
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
