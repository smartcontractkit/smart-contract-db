const getTypeof =
  typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
    ? (obj) => typeof obj
    : (obj) =>
        obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj;

export const getBackgroundColor = (props) => {
  const { seed } = props;
  const { saturation } = props;
  const { brightness } = props;
  const { color } = props;

  if (color) return color;
  let hue = Math.sin(seed);
  hue = hue < 0 ? -hue : hue;
  hue = Math.round(hue * 359) + 1;
  return `hsl(${hue},${saturation},${brightness})`;
};

export const getFontSize = (props) => {
  const { single } = props;

  return single ? props.size / 1.7 : (props.size - 5) / 2;
};

export const getSize = (props) => {
  return `${props.size}px`;
};

export const getInitials = (props) => {
  const { text } = props;
  const { single } = props;

  if (text !== null && (typeof text === 'undefined' ? 'undefined' : getTypeof(text)) === 'object') {
    return text;
  }
  if (text.indexOf(' ') > 0 && !single) {
    return text.split(' ')[0].charAt(0) + text.split(' ')[1].charAt(0);
  }
  return text.charAt(0);
};
