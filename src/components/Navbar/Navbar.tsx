import * as React from 'react';
import { Nav, NavItem } from './Navbar.styles';
import toolConfig from './toolsConfig';

type NavbarProps = {
  currentTool: string;
  changeTool: (toolKey: string) => void;
};

export const Navbar: React.FC<NavbarProps> = ({ currentTool, changeTool }) => {
  const handleToolClick = (toolKey: string, action: () => void) => {
    changeTool(toolKey);
    action();
  };

  return (
    <Nav>
      {toolConfig.map((group, groupIndex) => (
        <div key={`nav-group-${groupIndex}`}>
          {Object.entries(group).map(([toolKey, tool]) => {
            const { icon: Icon, action } = tool;
            return (
              <NavItem
                key={toolKey}
                onClick={() => handleToolClick(toolKey, action)}
                className={currentTool === toolKey ? 'active' : ''}
              >
                <Icon />
              </NavItem>
            );
          })}
        </div>
      ))}
    </Nav>
  );
};
