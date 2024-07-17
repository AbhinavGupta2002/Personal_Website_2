import React from 'react';

const TimeLineList = ({ points }) => {
  return (
    <ul className="mt-3 list-disc pl-5 space-y-3">
      {points.map((point, index) => (
        <li key={index} className="ml-2">
          {point}
        </li>
      ))}
    </ul>
  );
};

export default TimeLineList;