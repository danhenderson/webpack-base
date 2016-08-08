import { spacing } from '../variables';

let spaces = [
  { name: 'quarter', factor: 0.25 },
  { name: 'half', factor: 0.5 },
  { name: 'single', factor: 1 },
  { name: 'double', factor: 2 }
];

let padding = {
  pad: {},
  padX: {},
  padY: {}
};

spaces.forEach(space => {
  padding.pad[space.name] = {
    padding: `${spacing.rhythm * space.factor}em`
  }
  padding.padY[space.name] = {
    paddingTop: `${spacing.rhythm * space.factor}em`,
    paddingBottom: `${spacing.rhythm * space.factor}em`
  }
  padding.padX[space.name] = {
    paddingLeft: `${spacing.rhythm * space.factor}em`,
    paddingRight: `${spacing.rhythm * space.factor}em`
  }
});

export default padding;
