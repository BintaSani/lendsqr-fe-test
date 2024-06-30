import React, { useState,useRef } from 'react';
import './table.scss';
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import CustomDropdown from '../customSelect/customSelect';
import {ReactComponent as User} from '../../images/blacklist.svg';


// export interface IAppProps {
// }

export default function Table ({titles, data, onRowClick} :{
    titles: any[];
    data: any[];
    onRowClick?: (id: string, users: any) => void;}) {

    const [show, setShow] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
  
    const handleFocus = () => {
      if (inputRef.current && inputRef.current.value === '') {
        inputRef.current.type = 'datetime-local';
      }
    };
  
    const handleBlur = () => {
      if (inputRef.current && inputRef.current.value === '') {
        inputRef.current.type = 'text';
      }
    };

    const handleDropdown = () => {
        setShow(!show);
    }
    const handleVisibility = () => {
        setIsVisible(!isVisible);
    }
    const options = ['Lendsqr', 'Irorun'];
    const statusOptions = ['Inactive', 'Pending', 'Active', 'Blacklisted']

  const handleSelectChange = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <table className='table'>
        <thead className='table-head'>
            <tr>
                {titles.map((title) => (
                <td className="table-cell" key={title.field}>
                    <div className="">
                    {title.text}
                    <span onClick={handleVisibility}>{title.icon}</span>
                    </div>
                    
                </td>
                ))}
                {isVisible && <div className='filters'>
                    <p>Organization</p>
                    <CustomDropdown options={options} onChange={handleSelectChange} placeholder="Select" />
                    <p>Username</p>
                    <input type='text' placeholder='User'/>
                    <p>Email</p>
                    <input type='email' placeholder='Email'/>
                    <p>Date</p>
                    <input
                        ref={inputRef}
                        type={value === '' ? 'text' : 'datetime-local'}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder="Date"
                    />
                    <p>Phone Number</p>
                    <input type='tel' placeholder='Phone Number'/>
                    <p>Status</p>
                    <CustomDropdown options={statusOptions} onChange={handleSelectChange} placeholder="Select" />
                    <div className='button-container'>
                        <button type="button">Reset</button>
                        <button type="button">Filter</button>
                    </div>
                </div>}
                <td className="table-cell">
                    <div className=""></div>
                </td>
          </tr>
        </thead>
        <tbody>
            {data.map((row: any) => (
            <tr key={row.id} className='table-body-row' >
              
              {titles.map((title) => (
                <td key={title.field}  className="">
                  {
                    // <pre>
                    //     {title.field === 'customer' ? 'Yes': 'Nooo'}
                    // </pre>

                    title.field === "status" ? (
                      <StatusCell status={row[title.field]} />
                    )  : (
                      <div className="">{row[title.field]}</div>
                    )
                  }
                </td>
                
              ))}
               <td className="status-icon">
                <HiDotsVertical className="rotated" onClick={handleDropdown} />
                </td>
                {show && <div className='drop-down'>
                    <button onClick={() => onRowClick && onRowClick(row.id, data)} type="button"><MdOutlineRemoveRedEye className='icons'/> View Details</button>
                    <button type="button"><User/>Blacklist User</button>
                    <button type="button"><GrUserExpert className='icons'/> Activate User</button>
                </div>}
            </tr>
          ))}
        </tbody>
      
    </table>
  );
}
function StatusCell({ status }: { status: string }) {
    
    
    return (
    <div className={`${status === 'pending' || status === 'Pending' ? 'pending' : status === 'active' || status === 'Active' ? 'active' : status === 'blacklisted' || status === 'Blacklisted' ? 'blacklisted' : 'inactive'}`}>
        {status}
    </div>
      
    );
  }