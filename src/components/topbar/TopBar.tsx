import React, { FunctionComponent, ReactElement } from "react";

import "./styles/topbar.scss";

interface MenuItem {
  linkName: string;
  linkUrl: string;
}

interface TopBarProps {
  menuItems: MenuItem[];
}

const TopBar: FunctionComponent<TopBarProps> = ({ menuItems }) => {
  return (
    <div className="topbar-component topbar-wrapper">
      <div className="logo">Logo</div>

      {menuItems && menuItems.length > 0 && (
        <div>
          <ul>
            {menuItems.map((menuItem: MenuItem) => (
              <li>
                <a href={menuItem.linkUrl}>{menuItem.linkName}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopBar;
