import React from 'react';
import './card.scss';

export interface IAppProps {
    title: string;
    amount: string;
    Icon:any;
}

export default function Cards ({title, amount, Icon}: IAppProps) {
  return (
    <div className='card'>
        {/* <div className='icon-container'></div> */}
        <Icon/>
        <p className='card-title'>{title}</p>
        <h1>{amount}</h1>
      
    </div>
  );
}



