import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import Data from '../components/Data';
import Fetcher from '../components/Fetcher';
import Status from '../components/Status';

const App = () => {
  const [data, setData] = useState<any>({
    status: '',
  });

  return (
    <div className="App">
      <Fetcher setData={setData} />
      <Status statusCode={data.status} />
      <Data data={data.data} />
    </div>
  );
};

export default App;
