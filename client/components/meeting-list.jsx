import React from 'react';
import Meeting from './meeting.jsx';

export const MeetingList = ({meetings}) => (
  <div>
    {meetings.map(meeting => (
      <Meeting />
    ))}
  </div>
);
