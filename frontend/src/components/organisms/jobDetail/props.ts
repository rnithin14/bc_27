export interface JobDetailProps
  extends JobDescriptionProps,
    CommuteRoutesProps {
  tabType: TabType;
  saved?: boolean;
}

export interface JobDescriptionProps {
  jobDescription: string;
  about: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CommuteRoutesProps extends RouteTabProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  routeTabType: RouteTabType;
}

export interface RouteTabProps {
  userId: number;
  jobId: number;
}

export const jobDetailData: JobDetailProps = {
  userId: 1,
  jobId: 4,
  tabType: "description",
  routeTabType: "bus",
  jobDescription:
    "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
  about:
    "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.",
};

export type modalType = "upload" | "success" | "";

export type TabType = "description" | "routes";

export type RouteTabType = "car" | "bus";
