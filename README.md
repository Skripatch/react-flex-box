# react-flex-box
One React component to rule them flexboxes.

!!!This is a POC!!!
This project is inspired by atomic css concept and by a will to make our css cleaner and more reusable.

It is single react component - "\<Flex\>"

It renders it`s children

It has no dependencies other than React


## props: 
* container: string - kebab-case string that contains css values for flex container properties in this order
.* flexDirection
.* justifyContent
.* alignItems
.* flexWrap

* item: string - kebab-case string that contains css values for flex item properties in this order
.* flexGrow
.* flexShrink
.* flexBasis
.* flexWrap
.* justifySelf
.* alignSelf

## Example:
```jsx
<Flex container="row-center-center-nowrap">
  <Flex tagName="h1" item="1-1-auto">Hello World</Flex>
  <Flex tagName="h6" item="0-0-auto">February 19, 2019</Flex>
</Flex>
```

