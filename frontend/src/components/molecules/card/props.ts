import logo from "../../../assets/images/hp.svg";
export interface CustomCardProps {
  src: string;
  company: string;
  location: string;
  routes: string[];
  postTime: string;
  orientation: CardOrientation;
  skill: string;
  className?: string;
  saved?: boolean;
  onSave?: React.MouseEventHandler<HTMLButtonElement>;
  onApply?: React.MouseEventHandler<HTMLButtonElement>;
  onUnsave?: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export type CardOrientation = "horizontal" | "vertical" | "horizontalButton";

export const cardData: CustomCardProps = {
  skill: "User Experience Designer",
  src: logo,
  saved: false,
  orientation: "horizontal",
  company: "Hp",
  location: "Hyderabad",
  postTime: "1hr 36 mins ago",
  routes: ["bike", "train"],
};
