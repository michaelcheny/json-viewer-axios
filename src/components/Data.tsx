import React from 'react';

const Data = ({ data }: any) => {
  return (
    <div className="data">
      <div className="header">Data</div>
      <pre className="json">{JSON.stringify(data, null, 3)}</pre>
    </div>
  );
};

export default Data;
