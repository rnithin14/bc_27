import { ActiveMenuItem, StyledMenuItem } from "./styles";

export const useStyledMenu = (route: string, href: string) => {
  return route === href ? ActiveMenuItem : StyledMenuItem;
};
