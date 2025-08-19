import { HomeIcon, BookOpen, Phone } from "lucide-react";
import Index from "./pages/Index.jsx";
import Menu from "./pages/Menu.jsx";

/**
* Central place for defining the navigation items. Used for navigation components and routing.
*/
export const navItems = [
  {
    title: "首页",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "菜单",
    to: "/menu",
    icon: <BookOpen className="h-4 w-4" />,
    page: <Menu />,
  },
  {
    title: "联系我们",
    to: "/#contact",
    icon: <Phone className="h-4 w-4" />,
    page: <Index />,
  },
];
