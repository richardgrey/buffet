/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button as StyledButton, colors } from '@buffetjs/styles';
import { Plus } from '@buffetjs/icons';
import Flex from '../Flex';
import PrefixIcon from '../PrefixIcon';
import Spinner from './Spinner';

function Button({
  children,
  color,
  disabled,
  icon,
  label,
  isLoading,
  ...rest
}) {
  const content = label || children;

  const img =
    icon === true ? (
      <Plus height="11px" width="11px" fill={`${colors.button[color].color}`} />
    ) : (
      <PrefixIcon icon={icon} />
    );

  if (isLoading) {
    return (
      <StyledButton color={color} disabled={disabled} {...rest}>
        <Flex justifyContent="space-around">
          <Spinner />
        </Flex>
      </StyledButton>
    );
  }

  return (
    <StyledButton color={color} disabled={disabled} {...rest}>
      {img}
      {content}
    </StyledButton>
  );
}

Button.defaultProps = {
  children: null,
  color: 'primary',
  disabled: false,
  icon: false,
  isLoading: false,
  label: null,
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'cancel',
    'success',
    'delete',
    'none',
  ]),
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  isLoading: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
};

export default Button;
