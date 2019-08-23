# react-spacing

Shorthand responsive margin and padding utility component to modify an element’s appearance.

```
import Spacing from '@infrontlabs/react-spacing`

<Spacing pb={3}>Hello</Spacing>
```

### Advanced usage

Change the padding or margin on any element

```
import Spacing from '@infrontlabs/react-spacing`

<Spacing as="h1" pb={3}>Hello</Spacing>
```

### Default Props

Each prop can have a value between 0-5 to provide relative spacing

```
p: null,    // padding
m: null,    // margin
pt: null,   // padding-top
pr: null,   // padding-right
pb: null,   // padding-bottom
pl: null,   // padding-left
mt: null,   // margin-top
mr: null,   // margin-right
mb: null,   // margin-bottom
ml: null    // margin-left
```
