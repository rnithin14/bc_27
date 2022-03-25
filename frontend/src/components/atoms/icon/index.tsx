import * as React from "react";
import { ReactSVG } from "react-svg";

type IconProps = {
  src: string;
};

export default function Icon(props: IconProps) {
  return <ReactSVG data-testid="Icon" src={props.src} />;
}
