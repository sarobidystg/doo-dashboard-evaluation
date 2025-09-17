import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        icon: Icons.HomeIcon,
        items: [
          {
            title: "eCommerce",
            url: "/evaluation-pages/dashboards",
          },
        ],
      },
      {
        title: "User role",
        icon: Icons.User,
        items: [
          {
            title: "User Role",
            url: "/evaluation-pages/forms/user-role",
          },
        ],
      },
      {
        title: "Graph",
        icon: Icons.GraphNode,
        items: [
          {
            title: "Graph Node",
            url: "/evaluation-pages/forms/graph-node",
          },
        ],
      },
      {
        title: "Tables",
        url: "/tables",
        icon: Icons.Table,
        items: [
          {
            title: "Tables",
            url: "/evaluation-pages/tables",
          },
        ],
      },
    ],
  },
  {
    label: "OTHERS",
    items: [
      {
        title: "Charts",
        icon: Icons.PieChart,
        items: [
          {
            title: "Basic Chart",
            url: "/evaluation-pages/charts/basic-chart",
          },
        ],
      },
      {
        title: "UI Elements",
        icon: Icons.FourCircle,
        items: [
          {
            title: "Alerts",
            url: "/evaluation-pages/ui-elements/alerts",
          },
          {
            title: "Buttons",
            url: "/evaluation-pages/ui-elements/buttons",
          },
        ],
      },
    ],
  },
];
