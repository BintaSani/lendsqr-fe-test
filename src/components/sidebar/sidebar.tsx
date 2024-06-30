import React from 'react';
import { ReactComponent as Bag } from '../../images/bag.svg';
import { ReactComponent as Home } from '../../images/home.svg';
import { ReactComponent as Users } from '../../images/users.svg';
import { ReactComponent as Guarantor } from '../../images/guarantors.svg';
import { ReactComponent as Loan } from '../../images/loan.svg';
import { ReactComponent as Hand } from '../../images/handshake.svg';
import { ReactComponent as Savings } from '../../images/savings.svg';
import { ReactComponent as LoanReq } from '../../images/loanReq.svg';
import { ReactComponent as WhiteList } from '../../images/whitelist.svg';
import { ReactComponent as Karma } from '../../images/karma.svg';
import { ReactComponent as Scroll } from '../../images/scroll.svg';
import { ReactComponent as Gazebo } from '../../images/gazebo.svg';
import { ReactComponent as Fees } from '../../images/fees.svg';
import { ReactComponent as Logout } from '../../images/logout.svg';
import { ReactComponent as Audits } from '../../images/audit.svg';
import { ReactComponent as Systems } from '../../images/systems.svg';
import { ReactComponent as Preferences } from '../../images/preference.svg';
import { ReactComponent as Reports } from '../../images/reports.svg';
import { ReactComponent as Services } from '../../images/services.svg';
import { ReactComponent as Account } from '../../images/account.svg';
import { ReactComponent as Transaction } from '../../images/transactions.svg';
import { FaAngleDown } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import './sidebar.scss';

// export interface IAppProps {
// }

export default function SideBar () {
    const location = useLocation();
  const isUsersPage = location.pathname === '/user' || location.pathname === '/user-details';
  return (
    <aside className='sidebar'>
        <ul className='sidebar-list'>
            <li className='switch-org'>
                <a href="/user">
                    <Bag className='bag-icon'/>
                    Switch Organization
                    <FaAngleDown className='down-icon'/>
                </a>
            </li>
            <li>
                <a href="/user">
                    <Home className='bag-icon'/>
                    Dashboard
                </a>
            </li>
            <li className='category'>CUSTOMERS</li>
            <li className={isUsersPage ? 'active' : ''}>
                <a href="/user" className={isUsersPage ? 'active-text' : ''}>
                    <Users className='bag-icon'/>
                    Users
                </a>
            </li>
            <li>
                <a href="/user">
                    <Guarantor className='bag-icon'/>
                    Guarantors
                </a>
            </li>
            <li>
                <a href="/user">
                    <Loan className='bag-icon'/>
                    Loan
                </a>
            </li>
            <li>
                <a href="/user">
                    <Hand className='bag-icon'/>
                    Decision Models
                </a>
            </li>
            <li>
                <a href="/user">
                    <Savings className='bag-icon'/>
                    Savings
                </a>
            </li>
            <li>
                <a href="/user">
                    <LoanReq className='bag-icon'/>
                    Loan Request
                </a>
            </li>
            <li>
                <a href="/user">
                    <WhiteList className='bag-icon'/>
                    Whitelist
                </a>
            </li>
            <li>
                <a href="/user">
                    <Karma className='bag-icon'/>
                    Karma
                </a>
            </li>
            <li className='category'>BUSINESS</li>
            <li>
                <a href="/user">
                    <Bag className='bag-icon'/>
                    Organization
                </a>
            </li>
            <li>
                <a href="/user">
                    <LoanReq className='bag-icon'/>
                    Loan Products
                </a>
            </li>
            <li>
                <a href="/user">
                    <Gazebo className='bag-icon'/>
                    Saving Products
                </a>
            </li>
            <li>
                <a href="/user">
                    <FaCoins className='bag-icon'/>
                    Fees and Charges
                </a>
            </li>
            <li>
                <a href="/user">
                    <Transaction className='bag-icon'/>
                    Transactions
                </a>
            </li>
            <li>
                <a href="/user">
                    <Services className='bag-icon'/>
                    Services
                </a>
            </li>
            <li>
                <a href="/user">
                    <Account className='bag-icon'/>
                    Service Account
                </a>
            </li>
            <li>
                <a href="/user">
                    <Scroll className='bag-icon'/>
                    Settlements
                </a>
            </li>
            <li>
                <a href="/user">
                    <Reports className='bag-icon'/>
                    Reports
                </a>
            </li>
            <li className='category'>SETTINGS</li>
            <li>
                <a href="/user">
                    <Preferences className='bag-icon'/>
                    Preferences
                </a>
            </li>
            <li>
                <a href="/user">
                    <Fees className='bag-icon'/>
                    Fees and Pricing
                </a>
            </li>
            <li>
                <a href="/user">
                    <Audits className='bag-icon'/>
                    Audit Logs
                </a>
            </li>
            <li>
                <a href="/user">
                    <Systems className='bag-icon'/>
                    Systems Messages
                </a>
            </li>
            <li>
                <a href="/user">
                <Logout className='bag-icon'/>
                    Logout
                </a>
            </li>
        </ul>
      
    </aside>
  );
}
