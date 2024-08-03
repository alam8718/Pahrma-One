export const FirstGroupOption = [
  {
    name: "Dashboard",
    link: "/",
    icon: "/public/icons/dashboard.png",
  },
  {
    name: "Inventory",
    link: "/inventory",
    icon: "/public/icons/inventory-icon.png",
    children: [
      {
        name: "List of Medicines",
        link: "/inventory/list of medicines",
      },
      {
        name: "Medicine Groups",
        link: "/inventory/medicine group",
      },
    ],
  },
  {
    name: "Reports",
    link: "/report",
    icon: "/public/icons/report-icon.png",
    children: [
      {
        name: "Sales Report",
        link: "/report/sales report",
      },
      {
        name: "Payments Report",
        link: "/report/payments report",
      },
    ],
  },
  {
    name: "Configuration",
    link: "#",
    icon: "/public/icons/configure-icon.png",
  },
];

export const SecondGroupOption = [
  {
    name: "Contact Management",
    link: "#",
    icon: "/public/icons/contact-icon.png",
    children: [
      {
        name: "Demo",
        link: "#",
      },
    ],
  },
  {
    name: "Notifications",
    link: "#",
    icon: "/public/icons/notification-icon.png",
    notiCount: "11"
  },
  {
    name: "Chat with Visitors",
    link: "#",
    icon: "/public/icons/chat-icon.png",
  },
];
export const ThirdGroupOption = [

  {
    name: "Application Settings",
    link: "#",
    icon: "/public/icons/advance-icon.png",
  },
  {
    name: "Covid -19",
    link: "#",
    icon: "/public/icons/covid-icon.png",
  },
];