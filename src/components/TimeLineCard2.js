import React from 'react';

import '../stylesheets/timeLineCard2.css'

const TimeLineCard2 = ({day,month,text}) => {




    return (

        <div className="time-line-card2">

            <div className='inner-card'>
                <div className='day'>{day}</div>
                <div className="date">{month}</div>

            </div>
            <div className="text">{text}</div>


        </div>
    );
};

export default TimeLineCard2;