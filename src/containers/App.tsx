// import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import Data from '../components/Data';
import Headers from '../components/Headers';
import Fetcher from '../components/Fetcher';
import Status from '../components/Status';
import Config from '../components/Config';

const App = () => {
  const [data, setData] = useState<any>({
    // status: '',
    // headers: '',
  });

  return (
    <div className="App">
      <Fetcher setData={setData} />
      <Status statusCode={data.status} />
      <Headers headers={data.headers} />
      <Config config={data.config} />
      <Data data={data.data} />
    </div>
  );
};

export default App;
