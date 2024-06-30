import React, {useState,useEffect} from 'react';
import Table from '../table/table';
import Cards from '../card/card';
import {ReactComponent as Users} from '../../images/user.svg';
import {ReactComponent as Active} from '../../images/active.svg';
import {ReactComponent as Loan} from '../../images/user-loan.svg';
import {ReactComponent as Saving} from '../../images/user-saving.svg';
import { IoFilterSharp } from "react-icons/io5";
import { useSearchParams, useNavigate } from 'react-router-dom';
import PaginationBar from '../pagination/pagination';
import {  IoIosArrowDown } from "react-icons/io";
import './user.scss';

export interface Props {
}
const title = [
    {field: 'organization', text: 'ORGANIZATION', icon: <IoFilterSharp className='size-4'/>},
    {field: 'userName', text: 'USERNAME', icon: <IoFilterSharp className='size-4'/>},
    {field: 'email', text: 'Email', icon: <IoFilterSharp className='size-4'/>},
    {field: 'phoneNumber', text: 'PHONE NUMBER', icon: <IoFilterSharp className='size-4'/>},
    {field: 'dateJoined', text: 'DATE JOINED', icon: <IoFilterSharp className='size-4'/>},
    {field: 'status', text: 'STATUS', icon: <IoFilterSharp className='size-4'/>},
]

const metaData = {
    "page": 1,
    "perPage": 10,
    "total": 500,
    "totalPages": 50
}
export default function UserContent () {
    const [searchParams] = useSearchParams();
    const [users, setUsers] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); 
  const page = searchParams.get('page') || '1';

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/1e3f4c58-8237-4493-9c72-d47281e120d4');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data.results);
        // console.log(data);
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
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return date.toLocaleString('en-US', options);
  };

    const data = users.map((row: any) => {
      //  const status = row.name.title === 'Mr' ? 'Active' : row.name.title === 'Miss' ? 'Draft' : 'Blacklisted';
      //  const id = row.login.uuid
       return {
          key: row.id,
          organization: row.organization,
          userName: row.username,
          email: row.email,
          phoneNumber: row.cell,
          dateJoined: formatDate(row.dateJoined),
          status: row.status,
          id: row.id,
          firstName: row.first,
          lastName: row.last,
          gender: row.gender,
          image: row.image,
          string: row.string
        };
      });

      const metaData1 = metaData;
    const currentPage = parseInt(page);
    const totalPages = metaData1.totalPages;
    const paginatedData = data.slice((currentPage - 1) * metaData1.perPage, currentPage * metaData1.perPage);
    const activeUsersCount = data.filter((user: { status: string; }) => user.status === 'Active').length;
    const usersWithLoansGreaterThanOne = users.filter((row: any) => row.loan > 1);
    const usersWithSavingsGreaterThanOne = users.filter((row: any) => row.savings > 1);

// Count the number of users with loans greater than one
    const usersWithLoansCount = usersWithLoansGreaterThanOne.length;
    const usersWithSavingsCount = usersWithSavingsGreaterThanOne.length;
    const handleRowClick = (id: string, users: any): void => {
      // setId(id);
      localStorage.setItem('userId', id);
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/user-details'); 
      // setIsApproveRequest(true);
      // console.log(id);
    
  };

    return (
    <div className='user-content'>
        <div className='content-container'>
            <Cards title='USERS' amount={users.length} Icon={Users}/>
            <Cards title='ACTIVE USERS' amount={activeUsersCount} Icon={Active}/>
            <Cards title='USERS WITH LOANS' amount={usersWithLoansCount} Icon={Loan}/>
            <Cards title='USERS WITH SAVINGS' amount={usersWithSavingsCount} Icon={Saving}/>
        </div>
        <div className='table-container'>
            <Table titles={title} data={paginatedData} 
                onRowClick={handleRowClick}/>
        </div>
        <div className='pagination-container'>
            <p className=""> Showing <span className='showing'>{currentPage * 10}  <IoIosArrowDown className='down-arrow'/> </span> out of{" "}
            {metaData1.total}</p>
            <PaginationBar currentPage={currentPage} totalPages={totalPages} />
        </div>
    </div>
  );
}
