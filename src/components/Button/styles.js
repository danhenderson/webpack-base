import { colors } from 'styles/variables';
import { padding } from 'styles/spacing';

console.log(padding);

export default {
  ...padding.padY.half,
  ...padding.padX.single,
  backgroundColor: colors.primary,
  outline: 'none',
  border: '1px solid rgba(0, 0, 0, 0.5)',
  borderRadius: '20px',
  color: colors.light,
  cursor: 'pointer',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  ':hover': {
    backgroundColor: colors.dark
  }
}
