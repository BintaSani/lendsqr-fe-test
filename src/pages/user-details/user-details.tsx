import React from 'react';
import Header from '../../components/header/header';
import SideBar from '../../components/sidebar/sidebar';
import UserDetailsContent from '../../components/user-details-content/User-details';
import './user-details.scss';

// export interface IAppProps {
// }

export default function UserDetails () {
  return (
    <div className='user-details-page'>
        <Header/>
      <div className='user-details-page-content'>
        <SideBar/>
        <UserDetailsContent/>
      </div>
    </div>
  );
}
