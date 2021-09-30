const _typeof =
  typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
    ? function (obj) {
        return typeof obj;
      }
    : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj;
      };

export function getBackgroundColor(props) {
  let seed = props.seed,
    saturation = props.saturation,
    brightness = props.brightness,
    color = props.color;

  if (color) return color;
  let hue = Math.sin(seed);
  hue = hue < 0 ? -hue : hue;
  hue = Math.round(hue * 359) + 1;
  return 'hsl(' + hue + ',' + saturation + ',' + brightness + ')';
}

export function getFontSize(props) {
  let single = props.single;

  return single ? props.size / 1.7 : (props.size - 5) / 2;
}

export function getSize(props) {
  return props.size + 'px';
}

export function getInitials(props) {
  let text = props.text,
    single = props.single;

  if (text !== null && (typeof text === 'undefined' ? 'undefined' : _typeof(text)) === 'object') {
    return text;
  } else if (text.indexOf(' ') > 0 && !single) {
    return text.split(' ')[0].charAt(0) + text.split(' ')[1].charAt(0);
  } else {
    return text.charAt(0);
  }
}
