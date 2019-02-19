# react-flex-box
One React component to rule them flexboxes.

!!!This is a POC!!!
This project is inspired by atomic css concept and by a will to make our css cleaner and more reusable.

It is single react component - "\<Flex\>"

It renders it`s children

It has no dependencies other than React


## props: 
* container: string - snake_case string that contains css values for flex container properties in this order
    * flexDirection
    * justifyContent
    * alignItems
    * flexWrap

* item: string - snake_case string that contains css values for flex item properties in this order
    * flexGrow
    * flexShrink
    * flexBasis
    * flexWrap
    * justifySelf
    * alignSelf
    
* tagName: string - the html tag to render (default is div)

* className

* style

## Example:
```jsx
<Flex container="row_center_center_nowrap">
  <Flex tagName="h1" item="1_1_auto">Hello World</Flex>
  <Flex tagName="h6" item="0_0_auto">February 19, 2019</Flex>
</Flex>
```
[Demo Page](https://skripatch.github.io/react-flex-box/build/)

