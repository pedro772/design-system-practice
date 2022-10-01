import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

import { typeScale } from "../utils";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor};
    &:hover {
      background-color: ${props.theme.status.warningColorHover};
    }

    &:focus {
      background-color: ${props.theme.status.warningColorHover};
      outline: 3px solid ${props.theme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
      color: ${props.theme.textColorInverted}
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: ({ props }) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonWarning: ({ props }) => `
    border: 2px solid ${props.theme.status.warningColor};

    &:hover {
      border: 2px solid ${props.theme.status.warningColorHover};
    }
  `,
  error: ({ props }) => `
    background: none;
    color: ${props.theme.status.errorColor};
    &:hover {
      background-color: ${props.theme.status.errorColorHover};
    }

    &:focus {
      background-color: ${props.theme.status.errorColorHover};
      outline: 3px solid ${props.theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
      color: ${props.theme.textColorInverted}
    }

    &:active {
      background-color: ${props.theme.status.errorColorActive};
    }
  `,
  primaryButtonError: ({ props }) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonError: ({ props }) => `
    border: 2px solid ${props.theme.status.errorColor};

    &:hover {
      border: 2px solid ${props.theme.status.errorColorHover};
    }
  `,
  success: ({ props }) => `
    background: none;
    color: ${props.theme.status.successColor};
    &:hover {
      background-color: ${props.theme.status.successColorHover};
    }

    &:focus {
      background-color: ${props.theme.status.successColorHover};
      outline: 3px solid ${props.theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
      color: ${props.theme.textColorInverted}
    }

    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({ props }) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonSuccess: ({ props }) => `
    border: 2px solid ${props.theme.status.successColor};

    &:hover {
      border: 2px solid ${props.theme.status.successColorHover};
    }
  `,
}

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  min-width: 100px;
  cursor: pointer;
  font-family: 'Montserrat', monospace;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${props => props.theme.primaryColorHover};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${props => props.theme.primaryColorHover};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${props => props.theme.primaryColorActive};
    border-color: ${props => props.theme.primaryColorActive};
    color: ${props => props.theme.textColorOnPrimary}
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  border: none;
  color: ${props => props.theme.textColorOnPrimary};

  &:disabled {
    background-color: ${props => props.theme.disabledColor};
    color: ${props => props.theme.textColorOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  background-color: ${props => props.theme.textColorInverted};
  border: 2px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};

  &:hover {
    border: 2px solid ${props => props.theme.primaryColorHover};
  }

  &:disabled {
    background: none;
    color: ${props => props.theme.disabledColor};
    border-color: ${props => props.theme.disabledColor};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
  background-color: ${props => props.theme.textColorInverted};
  border: none;
  color: ${props => props.theme.primaryColor};

  &:disabled {
    background: none;
    color: ${props => props.theme.disabledColor};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;