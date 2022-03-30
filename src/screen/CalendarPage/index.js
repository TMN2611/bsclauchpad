import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
const localizer = momentLocalizer(moment);
const myEventsList = [
  {
    title: 'This is title',
    imgUrl: './img/projects/project-01.jpg',
    start: new Date('28 March 2022 00:00:00 +7'),
    end: new Date('28 March 2022 10:00:00 +7'),
  },
  {
    title: 'This is title',
    imgUrl: './img/projects/project-01.jpg',
    start: new Date('28 March 2022 00:00:00 +7'),
    end: new Date('28 March 2022 10:00:00 +7'),
  },
  {
    title: 'This is title',
    imgUrl: './img/projects/project-01.jpg',
    start: new Date('28 March 2022 00:00:00 +7'),
    end: new Date('28 March 2022 10:00:00 +7'),
  },
  {
    title: 'This is title',
    imgUrl: './img/projects/project-01.jpg',
    start: new Date('28 March 2022 20:00:00 +7'),
    end: new Date('28 March 2022 23:00:00 +7'),
  },
  {
    title: 'This is title',
    imgUrl: './img/projects/project-01.jpg',
    start: new Date('28 March 2022 00:00:00 +7'),
    end: new Date('28 March 2022 10:00:00 +7'),
  },
  {
    title: 'This is title',
    imgUrl: './img/projects/project-02.jpg',
    start: new Date('10 March 2022 00:00:00 +7'),
    end: new Date('10 March 2022 10:00:00 +7'),
  },
  {
    title: 'This is title',
    imgUrl: './img/projects/project-03.jpg',
    start: new Date('22 March 2022 00:00:00 +7'),
    end: new Date('22 March 2022 10:00:00 +7'),
  },
  {
    title: 'This is title',
    imgUrl: './img/projects/project-04.jpg',
    start: new Date('8 March 2022 00:00:00 +7'),
    end: new Date('8 March 2022 10:00:00 +7'),
  },
];
let counterEvent = 0;

function EventComponent(e) {
  counterEvent++;
  return (
    <div className='evenet-component'>
      <img src={`${e.event.imgUrl}`} alt='' style={{ width: '100px' }} />
    </div>
  );
}
const MyCalendar = (props) => (
  <div className='calendar'>
    <div className='container'>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 1200 }}
        components={{
          event: EventComponent,
          month: {
            dateHeader: (props) => {
              console.log(props);
              return <div>{props.label}</div>;
            },
          },
        }}
      />
    </div>
  </div>
);
export default MyCalendar;
