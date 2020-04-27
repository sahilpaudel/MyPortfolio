import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/BusinessCenter";
import ProjectIcon from "@material-ui/icons/AccountTree";
import SchoolIcon from "@material-ui/icons/School";

export const drawerOptions = [
  {
    text: "Me",
    icon: PersonIcon,
    path: "/"
  },
  {
    text: "Projects",
    icon: ProjectIcon,
    path: "/projects"
  },
  {
    text: "Work",
    icon: WorkIcon,
    path: "/work"
  },
  {
    text: "Education",
    icon: SchoolIcon,
    path: "/education"
  }
];
