import React from 'react';

const Month = () => {
    const d = new Date();

    const dayOfTheWeek = d.getDay();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayToString = dayNames[dayOfTheWeek];

    const date = d.getDate();
    const year = d.getFullYear();

    const monthIndex = d.getMonth();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthName = monthNames[monthIndex];

    return (
        <div className="month-container">
            <div className="fade-in">Today is: </div>
            <br/>
            <div className="fade-in">{dayToString}, {date} {monthName} {year}</div>
        </div>
    );
}

export default Month;
