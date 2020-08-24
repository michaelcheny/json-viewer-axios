import React from 'react';

const Headers = ({ headers }: any) => {
  return (
    <div className="headers">
      <div className="header">Headers</div>
      <pre className="json">{JSON.stringify(headers, null, 3)}</pre>
    </div>
  );
};

export default Headers;
