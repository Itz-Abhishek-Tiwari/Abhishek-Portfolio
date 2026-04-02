import PropTypes from 'prop-types';
import HeroTerminal from './HeroTerminal';
import HeroCyberpunk from './HeroCyberpunk';
import HeroGlass from './HeroGlass';

export default function Hero({ designStyle = 'terminal' }) {
  if (designStyle === 'cyberpunk') return <HeroCyberpunk />;
  if (designStyle === 'glass') return <HeroGlass />;
  return <HeroTerminal />;
}

Hero.propTypes = {
  designStyle: PropTypes.oneOf(['terminal', 'cyberpunk', 'glass'])
};
