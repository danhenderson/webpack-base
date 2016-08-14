import { spacing } from '../variables';

let spaces = [
  { name: 'quarter', factor: 0.25 },
  { name: 'half', factor: 0.5 },
  { name: 'single', factor: 1 },
  { name: 'double', factor: 2 }
];

let margin = {
  mar: {},
  marX: {},
  marY: {}
};

spaces.map(space => {
  margin.mar[space.name] = {
    margin: `${spacing.rhythm * space.factor}em`
  }
  margin.marY[space.name] = {
    marginTop: `${spacing.rhythm * space.factor}em`,
    marginBottom: `${spacing.rhythm * space.factor}em`
  }
  margin.marX[space.name] = {
    marginLeft: `${spacing.rhythm * space.factor}em`,
    marginRight: `${spacing.rhythm * space.factor}em`
  }
});

export default margin;
