import React from 'react';

interface ConfigProps {
  config: object | null;
}

const Config: React.FC<ConfigProps> = ({ config }) => {
  return (
    <div className="data">
      <div className="header">Config</div>
      <pre className="json">{JSON.stringify(config, null, 3)}</pre>
    </div>
  );
};

export default Config;
