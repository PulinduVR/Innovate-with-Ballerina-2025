import React from 'react';

import '../stylesheets/timeLineCard3.css'

const TimeLineCard3 = ({day,month,text, id}) => {

    const cardClassName = id === 'card-4' ? 'time-line-card3 special-card1' : 'time-line-card3';


    return (

        <div className={cardClassName}>

            <div className='inner-card'>
                <div className='day'>{day}</div>
                <div className="date">{month}</div>

            </div>
            <div className="text">{text}</div>


        </div>
    );
};

export default TimeLineCard3;