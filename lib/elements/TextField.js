import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';

function setBorderFocusColor({ activeColor, isValid }) {
  if (!isValid) { return colors.danger; }
  return colors[activeColor];
}

function setBorderColor({ isValid }) {
  if (!isValid) { return colors.danger; }
  return colors.extraDarkSmoke;
}

function setColor({ isValid }) {
  if (!isValid) { return colors.danger; }
  return colors.steel;
};


const TextField = styled.input`
  background: none;
  border: 0px;
  border-bottom: 2px solid ${setBorderColor};
  box-sizing: border-box;
  color: ${setColor};
  display: inline-block;
  font-size: 20px;
  outline: none;
  margin-bottom: 8px;
  padding-bottom: 8px;
  transition: border-bottom 150ms linear;
  width: 100%;
  &:focus {
    transition: border-bottom 150ms linear;
    border-bottom: 2px solid ${setBorderFocusColor};
  }
`;

TextField.propTypes = {
  activeColor: PropTypes.string,
  isValid: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

TextField.defaultProps = {
  activeColor: 'blue',
  isValid: true,
};

export default TextField;
