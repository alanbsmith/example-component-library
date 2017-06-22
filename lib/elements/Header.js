import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as colors from '../styles/colors';

const headerSizes = {
  small: {
    'font-size': '24px',
  },
  medium: {
    'font-size': '36px',
  },
  large: {
    'font-size': '48px',
  },
};


const Header = styled.h1`
  color: ${({ color }) => colors[color]};
  font-size: ${({ size }) => headerSizes[size]['font-size']};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: 8px 0;
  text-transform: ${({ textTransform }) => textTransform};
`;

Header.propTypes = {
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  textTransform: PropTypes.string,
};

Header.defaultProps = {
  color: 'steel',
  fontWeight: 400,
  size: 'medium',
  textTransform: 'capitalize',
};

export default Header;
