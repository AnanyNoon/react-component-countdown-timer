# React component Countdown Timer

This is a simple countdown timer react component.

### [Demo](https://AnanyNoon.github.io/react-component-countdown-timer/)

The demo app source code lives inside the `src/docs` folder. 

## Documentation

### Installation

**npm**

```bash
npm install react-component-countdown-timer --save
```

[⚠️ Also install react-component-countdown-timer for css](https://github.com/markusenglund/react-npm-component-starter#what-about-css)

```bash
@import "~react-component-countdown-timer/lib/styles.css";
```


### Example

```js
import React from "react";
import CountdownTimer from "react-component-countdown-timer";

class SimpleCountdownTimer extends React.Component {
  render() {
    var settings = {
      count: 5432,
      border: true,
      showTitle: true,
      noPoints: true,
    };
    return (
      <CountdownTimer {...settings} />
    );
  }
}
```


OR


```js
import React from "react";
import CountdownTimer from "react-component-countdown-timer";

class SimpleCountdownTimer extends React.Component {
  render() {
    return (
      <CountdownTimer count={5432} border showTitle noPoints />
    );
  }
}
```




### Common API

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| className | string | `''` | Additional CSS class for the root DOM node |
| id | string | `''` | Additional id for the root DOM node |
| count | number | `0` | The count value of the timer base on second |
| border | boolean | `false` | If the value is `true`, it means a react-component-countdown-timer has a border |
| showTitle | boolean | `false` | If the value is `true`, it means a react-component-countdown-timer has a title top of each section |
| direction | `right` or `left` | `left` | Value to be added or subtracted on each step the slider makes. Must be greater than zero, and `max` - `min` should be evenly divisible by the step value. <br /> When `marks` is not an empty object, `step` can be set to `null`, to make `marks` as steps. |
| noPoints | boolean | `false` | If vertical is `true`, the react-component-countdown-timer will be `:` between each section . |
| color | string | `#000` |  |
| backgroundColor | string | `#fff` |  |
| responsive | boolean | `false` | If `true`, with is responsive. |
| size | `number` | `18` | count number font size
| labelSize | `number` | `12` | if showTitle is true this set label font size
| responsive | boolean | `false` | If `true`, with is responsive. |
| hideDay | boolean | `false` | If `true`, hide day. |
| hideHours | boolean | `false` | If `true`, hide hours . |
| dayTitle | string | `Day` |  |
| hourTitle | string | `Hour` |  |
| minuteTitle | string | `Min` |  |
| secondTitle | string | `Sec` |  |
| onEnd | Function | () => {} | |

## License

`react-component-countdown-timer` is released under the MIT license.
