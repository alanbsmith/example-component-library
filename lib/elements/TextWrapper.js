import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextWrapper = styled.div`
  text-align: ${({ textAlign }) => textAlign};
`;

TextWrapper.propTypes = {
  textAlign: PropTypes.string,
};

TextWrapper.defaultProps = {
  textAlign: 'left'
};

export default TextWrapper;
