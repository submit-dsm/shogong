import "@emotion/react";
import { theme } from "@package/ui";

declare module "@emotion/react" {
  type CustomType = typeof theme;
  export interface Theme extends CustomType {}
}
