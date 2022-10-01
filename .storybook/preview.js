import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";

addParameters({
  backgrounds: {
    default: "Default Theme",
    value:[
      {
        name: "Default Theme", 
        value: "#ffffff", 
        default: true
      },
      {
        name: "Dark Theme", 
        value: "#3A015C"
      }
    ]
  }
});

addDecorator(withContexts(contexts));