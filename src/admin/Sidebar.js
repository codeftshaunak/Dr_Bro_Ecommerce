import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import Dashboard from "./Dashboard";
import TourAdmin from "./TourAdmin";
import AdminShop from "./AdminShop";

export default function Sidebar() {
  const data = [
    {
      label: "Dashboard",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: <Dashboard />,
    },
    {
      label: "Tour",
      value: "Tour",
      icon: UserCircleIcon,
      desc: <TourAdmin />
    },
    {
      label: "Shop",
      value: "Shop",
      icon: Cog6ToothIcon,
      desc: <AdminShop />
    },
  ];

  const labelStyle = {
    fontSize: "1.5rem", // Adjust the font size to your desired value
  };

  const widthStyle = {
    width: "100%", // Adjust the width to your desired value
  }

  return (
    <div className="slidebar" style={widthStyle}>
      <Tabs value="dashboard">
        <TabsHeader>
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value}>
              <div className="flex items-center gap-2" style={labelStyle}>
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} style={labelStyle} className="flex">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>

  );
}
