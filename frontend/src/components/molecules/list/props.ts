import ola from "../../../assets/images/ola.svg";
export interface CustomListProps {
  src: string;
  company: string;
  rate: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const listData: CustomListProps = {
  src: ola,
  company: "Ola",
  rate: "45",
};
