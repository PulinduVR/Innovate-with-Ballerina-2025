import React from 'react';

import '../stylesheets/timeLineCard3.css'

const TimeLineCard3 = ({day,month,text}) => {




    return (

        <div className="time-line-card3">

            <div className='inner-card'>
                <div className='day'>{day}</div>
                <div className="date">{month}</div>

            </div>
            <div className="text">{text}</div>


        </div>
    );
};

export default TimeLineCard3;