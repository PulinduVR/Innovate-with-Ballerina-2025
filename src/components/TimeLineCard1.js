import React from 'react';

import '../stylesheets/timeLineCard1.css'

const TimeLineCard1 = ({text,month,day,id}) => {

    const cardClassName = id === 'card-5' ? 'time-line-card special-card' : 'time-line-card';

    return (
        <div className={cardClassName}>
            <div className="text">{text}</div>
            <div className='inner-card'>
                <div className="date">{month}</div>
                <div className='day'>{day}</div>
            </div>
        </div>
    );
};

export default TimeLineCard1;