export interface Menu {
  title: string;
  menuChild: MenuChild[];
}

export interface MenuChild {
  title: string;
  icon: string;
  isActive?: boolean;
  isCollapsed?: boolean;
  children?: string[];
}

export const menus: Menu[] = [
  {
    title: "Dashboard",
    menuChild: [
      { title: "Default", icon: "ChartPieSlice.svg", isActive: true },
      { title: "eCommerce", icon: "ShoppingBagOpen.svg" },
      { title: "Projects", icon: "FolderNotch.svg" },
      { title: "Online Courses", icon: "BookOpen.svg" },
    ],
  },
  {
    title: "Pages",
    menuChild: [
      {
        title: "User Profile",
        icon: "IdentificationBadge.svg",
        isCollapsed: true,
        children: [
          "Overview",
          "Projects",
          "Campaigns",
          "Documents",
          "Followers",
        ],
      },
      { title: "Account", icon: "IdentificationCard.svg" },
      { title: "Corporate", icon: "UsersThree.svg" },
      { title: "Blog", icon: "Notebook.svg" },
      { title: "Social", icon: "ChatsTeardrop.svg" },
    ],
  },
];
