import React from 'react';

export const Flex = ({
  className,
  children,
  tagName = 'div',
  container = '',
  item = '',
  style = {},
  ...props,
}) => {
  const TagName = tagName;
  const [ flexDirection, justifyContent, alignItems, flexWrap ] = container.toLowerCase().split('-');
  const [ flexGrow, flexShrink, flexBasis, justifySelf, alignSelf ] = item.toLowerCase().split('-');
  const display = container !== '' ? 'flex' : 'initial';
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
