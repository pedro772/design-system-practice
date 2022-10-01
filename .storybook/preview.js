import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

addParameters({
  backgrounds: {
    default: "Default Theme",
    values: [
      {
        name: "Default Theme", 
        value: "#ffffff"
      },
      {
        name: "Dark Theme", 
        value: "#3A015C"
      }
    ]
  }
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);