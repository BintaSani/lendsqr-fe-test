import React, { useState } from 'react';
import classNames from 'classnames';
import './NavBar.scss';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState<string>('General details');

  const tabs = [
    'General details',
    'Documents',
    'Bank details',
    'Loans',
    'Savings',
    'App and system',
  ];

  return (
    <nav className="navbar">
      {tabs.map(tab => (
        <div
          key={tab}
          className={classNames('tab', { 'tab--active': activeTab === tab })}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
