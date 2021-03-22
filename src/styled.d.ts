// import original module declarations
import "styled-components";

// and extend them
declare module "styled-components" {
  export interface DefaultTheme {
    shadow: string;

    colors: {
      main: string;
      secondary: string;
      black: string;
      white: string;
    };
  }
}
