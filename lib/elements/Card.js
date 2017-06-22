import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';


const Card = styled.div`
  background: ${({ bgColor })  => colors[bgColor]};
  border-radius: 4px;
  padding: 16px;
  margin: 16px;
`;

Card.propTypes = {
  bgColor: PropTypes.string,
};

Card.defaultProps = {
  bgColor: 'white',
};

export default Card;
