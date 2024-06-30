import React, {useState,useEffect} from 'react';
import {ReactComponent as Back} from '../../images/back.svg';
import { MdStarRate } from "react-icons/md";
import { MdStarOutline } from "react-icons/md";
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router';

import './user-details.scss';


export default function UserDetailsContent () {
  const [user, setUser] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate(); 
    const handleBack = () => {
      navigate('/user'); 
    }

    useEffect(() => {
      const userId = localStorage.getItem('userId');
      const userss = localStorage.getItem('users');
      // console.log(userId);
      // console.log(userss);
      // if (userss) {
      //   const users: any[] = JSON.parse(userss);
    
      //   // Find user by ID
      //   const foundUser = users.find((user) => user?.key === userId);
      //   console.log('Found user:', foundUser);
      //   if (foundUser) {
      //     setUser(foundUser);
      //     // console.log('Found user:', foundUser);
      //   } else {
      //     setError('User not found');
      //   }
      //   setLoading(false);
      // } else {
      //   setError('Users list not found in localStorage');
      //   setLoading(false);
      // }
      const fetchUsers = async () => {
          try {
              const response = await fetch('https://run.mocky.io/v3/1e3f4c58-8237-4493-9c72-d47281e120d4');
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              const users = data.results;
              console.log('Fetched users:', users);
              
              // Find user by ID
              const foundUser = users.find((user: any ) => user.id === userId);

              if (foundUser) {
                  setUser(foundUser);
                  // console.log(foundUser);
              } else {
                  setError('User not found');
              }
              setLoading(false);
          } catch (error) {
              setError('Failed to fetch user data');
              setLoading(false);
          }
      };

      fetchUsers();
  }, []);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!user) {
        return <div>User not found</div>;
    }

  return (
    <div className='user-details-content'>
      <div className='content-container'>
        <p className='back' onClick={handleBack}>
        <Back/>
        Back to Users
        </p>
        <div className='head'>
            <h4 className='title'>User Details</h4>
            <div>
                <button type="button">Blacklist User</button>
                <button type="button">Activate User</button>
            </div>
        </div>
        <div className='user-details'>
            <div>
                <div className='user-details-container'>
                    <img src={user.image || '../../../assets/avatar.svg'} alt="" />
                    <div>
                        <p>{user.first} { user.last}</p>
                        <p>{user.string.substring(0,12)}</p>
                    </div>
                </div>
                <div className='tier-container'>
                    <p>User&apos;s Tier</p>
                    <div>
                    <MdStarRate className='star' />
                    <MdStarOutline className='star'/>
                    <MdStarOutline  className='star'/>
                    </div>
                </div>
                <div className='Banking-container'>
                    <p>₦{user.amount}.00</p>
                    <p>{user.account}</p>
                </div>
            </div>
            <NavBar/>
        </div>
        <div className='personal-info'>
          <p>Personal Information</p>
          <div className='personal-info-container'>
            <div>
              <p>FULL NAME</p>
              <p>{user.first} { user.last}</p>
            </div>
            <div>
              <p>PHONE NUMBER</p>
              <p>{user.phone}</p>
            </div>
            <div>
              <p>EMAIL ADDRESS</p>
              <p>{user.email}</p>
            </div>
            <div>
              <p>BVN</p>
              <p>{user.bvn}</p>
            </div>
            <div>
              <p>GENDER</p>
              <p>{user.gender}</p>
            </div>
          </div>
          <div className='personal-info-container'>
            <div>
              <p>MARITAL STATUS</p>
              <p>{user.maritalStatus}</p>
            </div>
            <div>
              <p>CHILDREN</p>
              <p>{user.children}</p>
            </div>
            <div>
              <p>TYPE OF RESIDENCE</p>
              <p>{user.apartmentType}</p>
            </div>
          </div>
          <hr />
          <p>Education and Employment</p>
          <div className='education'>
            <div>
              <p>LEVEL OF EDUCATION</p>
              <p>{user.degree}</p>
            </div>
            <div>
              <p>EMPLOYMENT STATUS</p>
              <p>{user.employment}</p>
            </div>
            <div>
              <p>SECTOR OF EMPLOYMENT</p>
              <p>FinTech</p>
            </div>
            <div>
              <p>DURATION OF EMPLOYMENT</p>
              <p>{user.duration} years</p>
            </div>
          </div>
          <div className='education'>
            <div>
              <p>OFFICE EMAIL</p>
              <p>{user.email}</p>
            </div>
            <div>
              <p>MONTHLY INCOME</p>
              <p>₦{user.income}.00- ₦400,000.00</p>
            </div>
            <div>
              <p>LOAN REPAYMENT</p>
              <p>{user.loan}</p>
            </div>
          </div>
          <hr />
          <p>Socials</p>
          <div className='socials'>
            <div>
              <p>TWITTER</p>
              <p>@{user.twitter}</p>
            </div>
            <div>
              <p>FACEBOOK</p>
              <p>{user.faceBook}</p>
            </div>
            <div>
              <p>INSTAGRAM</p>
              <p>@{user.instagram}</p>
            </div>
          </div>
          <hr />
          <p>Guarantor</p>
          <div className='guarantor'>
            <div>
              <p>FULL NAME</p>
              <p>{user.name1}</p>
            </div>
            <div>
              <p>PHONE NUMBER</p>
              <p>{user.contact1}</p>
            </div>
            <div>
              <p>EMAIL ADDRESS</p>
              <p>{user.email1}</p>
            </div>
            <div>
              <p>RELATIONSHIP</p>
              <p>{user.relationship}</p>
            </div>
          </div>
          <hr />
          <div className='guarantor'>
            <div>
              <p>FULL NAME</p>
              <p>{user.name2}</p>
            </div>
            <div>
              <p>PHONE NUMBER</p>
              <p>{user.contact2}</p>
            </div>
            <div>
              <p>EMAIL ADDRESS</p>
              <p>{user.email2}</p>
            </div>
            <div>
              <p>RELATIONSHIP</p>
              <p>{user.relationship2}</p>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  );
}
