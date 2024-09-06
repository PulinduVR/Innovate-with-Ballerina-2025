import React from 'react';

import '../stylesheets/timeLineCard1.css'

const TimeLineCard1 = ({text,month,day}) => {

  

    return (
     
            <div className="time-line-card">
            <div className="text">{text}</div>
                <div className='inner-card'>
                    
                    <div className="date">{month}</div>
                    <div className='day'>{day}</div>
                </div>

            </div>
    
    );
};

export default TimeLineCard1;