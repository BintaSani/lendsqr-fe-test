import React from 'react';
import Header from '../../components/header/header';
import SideBar from '../../components/sidebar/sidebar';
import UserContent from '../../components/userComponent/user';
import './user.scss';

// export interface IAppProps {
// }

export default function User () {
  return (
    <div className='user-page'>
      <Header/>
      <div className='user-page-content'>
        <SideBar/>
        <UserContent/>
      </div>
    </div>
  );
}
