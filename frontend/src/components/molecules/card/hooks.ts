import { CardOrientation } from "./props";
import {
  HorizontalButtonWrapper,
  HorizontalWrapper,
  VerticalWrapper,
} from "./styles";

export const useStyle = (orientation: CardOrientation) => {
  switch (orientation) {
    case "horizontal":
      return HorizontalWrapper;
    case "vertical":
      return VerticalWrapper;
    case "horizontalButton":
      return HorizontalButtonWrapper;
  }
};
