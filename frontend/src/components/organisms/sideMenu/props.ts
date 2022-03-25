import { MenuItemProps } from "../../atoms/menuItem/props";
import DashboardIcon from "../../../assets/images/dashboard.svg";
import SavedJobsIcon from "../../../assets/images/saved-jobs.svg";
import FindJobsIcon from "../../../assets/icons/work.svg";
import PracticeTestIcon from "../../../assets/images/practice.svg";
import NewsIcon from "../../../assets/images/news.svg";
import NeedHelpIcon from "../../../assets/images/needHelp.svg";
import ContactUsIcon from "../../../assets/images/contactUs.svg";
import SettingsIcon from "../../../assets/images/settings.svg";


export interface MenuItemWithIcon extends MenuItemProps {
  icon?: string;
}

export interface SideMenuProps {
  menuItems: MenuItemWithIcon[];
}

export const sideMenuData: SideMenuProps = {
  menuItems: [
    {
      to: "/dashboard",
      children: "Dashboard",
      icon: DashboardIcon,
    },
    {
      to: "/searchJob",
      children: "Find Jobs",
      icon: FindJobsIcon,
    },
    {
      to: "/jobs/saved",
      children: "Saved Jobs",
      icon: SavedJobsIcon,
    },
    {
      to: "",
      children: "Practice Test",
      icon: PracticeTestIcon,
    },
    {
      to: "",
      children: "News & Events",
      icon: NewsIcon,
    },
    {
      to: "",
      children: "Need Help ?",
      icon: NeedHelpIcon,
    },
    {
      to: "",
      children: "Contact us",
      icon: ContactUsIcon,
    },
    {
      to: "",
      children: "Settings",
      icon: SettingsIcon,
    },

  ],
};
