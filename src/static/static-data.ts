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

export interface RightSidebarItem {
  title: string;
  items: {
    icon: string;
    text: string;
    timestamp?: string;
    iconBgColor?: string;
  }[];
}

export const rightSidebarData: RightSidebarItem[] = [
  {
    title: "Notifications",
    items: [
      {
        icon: "BugBeetle.svg",
        text: "You have a bug that needs to be fixed.",
        timestamp: "Just now",
        iconBgColor: "bg-[var(--primary-blue)]",
      },
      {
        icon: "User.svg",
        text: "New user registered",
        timestamp: "59 minutes ago",
        iconBgColor: "bg-[var(--primary-purple)]",
      },
      {
        icon: "BugBeetle.svg",
        text: "You have a bug that needs to be fixed.",
        timestamp: "12 hours ago",
        iconBgColor: "bg-[var(--primary-blue)]",
      },
      {
        icon: "Broadcast.svg",
        text: "Andi Lane subscribed to you",
        timestamp: "Today, 11:59 AM",
        iconBgColor: "bg-[var(--primary-purple)]",
      },
    ],
  },
  {
    title: "Activities",
    items: [
      {
        icon: "3D05.png",
        text: "You have a bug that needs to be fixed.",
        timestamp: "Just now",
      },
      {
        icon: "Female05.png",
        text: "Released a new version",
        timestamp: "59 minutes ago",
      },
      {
        icon: "3D08.png",
        text: "Submitted a bug",
        timestamp: "12 hours ago",
      },
      {
        icon: "Male07.png",
        text: "Modified A data in Page X",
        timestamp: "Today, 11:59 AM",
      },
      {
        icon: "Male11.png",
        text: "Deleted a page in Project X",
        timestamp: "Feb 2, 2023",
      },
    ],
  },
  {
    title: "Contacts",
    items: [
      {
        icon: "Female15.png",
        text: "Natali Craig",
      },
      {
        icon: "Male08.png",
        text: "Drew Cano",
      },
      {
        icon: "Male06.png",
        text: "Orlando Diggs",
      },
      {
        icon: "Female08.png",
        text: "Andi Lane",
      },
      {
        icon: "3D03.png",
        text: "Koray Okumus",
      },
    ],
  },
];
