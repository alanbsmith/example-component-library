import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Card,
  Header,
  TextWrapper,
} from '../elements/index';

const SimpleForm = (props) => {
  const {
    bgColor,
    buttonAlign,
    children,
    onSubmit,
    headerColor,
    headerText,
    primaryColor,
    size,
  } = props;

  return (
    <Card bgColor={bgColor}>
      <form onSubmit={onSubmit}>
        <Header
          color={headerColor}
          size={size}
        >
          {headerText}
        </Header>
        {children}
        <TextWrapper textAlign={buttonAlign}>
          <Button
            bgColor={bgColor}
            fontColor={primaryColor}
          >
            Cancel
          </Button>
          <Button
            bgColor={primaryColor}
            fontColor={bgColor}
          >
            Submit
          </Button>
        </TextWrapper>
      </form>
    </Card>
  );
};

SimpleForm.propTypes = {
  bgColor: PropTypes.string,
  buttonAlign: PropTypes.string,
  children: PropTypes.node,
  headerColor: PropTypes.string,
  headerText: PropTypes.string,
  onSubmit: PropTypes.func,
  primaryColor: PropTypes.string,
  size: PropTypes.string,
};

SimpleForm.defaultProps = {
  bgColor: 'white',
  buttonAlign: 'right',
  primaryColor: 'blue',
  size: 'medium',
};

export default SimpleForm;
