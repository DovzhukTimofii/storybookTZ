import { useState } from "react";

import SidebarMenu from "./SidebarMenu";

const meta = { title: "Navigation / SidebarMenu" };
export default meta;

const sampleOneLevel = [
  { id: "1", label: "Home", onClick: () => alert("Home clicked") },
  { id: "2", label: "About", onClick: () => alert("About clicked") },
  { id: "3", label: "Contact", onClick: () => alert("Contact clicked") }
];

const sampleTwoLevel = [
  { id: "1", label: "Home" },
  {
    id: "2",
    label: "Products",
    children: [
      { id: "2-1", label: "Widgets" },
      { id: "2-2", label: "Gizmos", children: [{ id: "2-2-1", label: "Gizmo A" }, { id: "2-2-2", label: "Gizmo B" }] }
    ]
  },
  { id: "3", label: "Settings" }
];

export const Basic = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(true);
    return (
      <div>
        <button onClick={() => setOpen(true)}>Open</button>
        <SidebarMenu open={open} onClose={() => setOpen(false)} items={sampleOneLevel} />
      </div>
    );
  }
};

export const Nested = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(true);
    return (
      <div>
        <button onClick={() => setOpen(true)}>Open Nested</button>
        <SidebarMenu open={open} onClose={() => setOpen(false)} items={sampleTwoLevel} />
      </div>
    );
  }
};
