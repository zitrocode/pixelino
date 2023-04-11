import 'styled-components';
import { light } from 'src/styles/theme';

type Theme = typeof light;

declare module 'styled_components' {
  export interface DefaultTheme extends Theme {}
}
