import React from 'react';
import { ReactComponent as Logo } from '../../logo.svg';
import { ReactComponent as Notification } from '../../bell.svg';
import { IoSearchSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import './header.scss';

// export interface IAppProps {
// }

export default function Header () {
  return (
    <div className='header'>
        <Logo className='logo'/>
        <div className='search-container'>
            <input type="search" name="" id="" placeholder='search for anything' />
            <button type="submit"><IoSearchSharp className='search-icon'/></button>
        </div>
        <div className='header-right'>
            <p className='docs'>Docs</p>
            <Notification className='notification-icon'/>
            <div className='avatar-container'>
                <img src='../../../assets/avatar.png' alt='avatar' className='avatar'/>
                <p className='username'>Adedeji</p>
                <FaCaretDown className='down-icon'/>
            </div>
        </div>
      
    </div>
  );
}
