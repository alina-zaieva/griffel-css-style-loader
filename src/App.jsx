import {
  Button,
  FluentProvider,
  webLightTheme,
} from "@fluentui/react-components";
import React from "react";

export function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <span>This should be a subtle button:</span>
      <Button appearance="subtle">Test</Button>
    </FluentProvider>
  );
}
