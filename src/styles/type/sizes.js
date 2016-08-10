import { sizes } from '../variables';

let fontSizes = {};

sizes.map(({ size, factor }) => {
  fontSizes.push({
    size: {
      fontSize: factor
    }
  });
});

export default fontSizes;
