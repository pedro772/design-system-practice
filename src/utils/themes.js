import { purple, neutral, yellow, red, green } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: purple[100],
  primaryColorHover: purple[200],
  primaryColorActive: purple[300],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  disabledColor: neutral[400],
  textColorOnDisabled: neutral[300],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  }
}

export const darkTheme = {
  primaryColor: neutral[100],
  primaryColorHover: neutral[200],
  primaryColorActive: neutral[300],
  textColorOnPrimary: purple[300],
  textColor: purple[300],
  textColorInverted: purple[100],
  disabledColor: neutral[400],
  textColorOnDisabled: neutral[300],
  formElementBackground: purple[100],
  textOnFormElementBackground: neutral[100],
  primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  }
}