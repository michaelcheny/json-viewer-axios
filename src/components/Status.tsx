import React from 'react';

const Status = ({ statusCode }: any) => {
  return (
    <div className="status">
      <h1>Status: {statusCode}</h1>
    </div>
  );
};

export default Status;
