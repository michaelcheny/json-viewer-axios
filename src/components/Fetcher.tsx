import React, { useState } from 'react';
import axios from 'axios';
import { Data } from '../interfaces/data.interface';

type FetcherProps = {
  setData: React.Dispatch<React.SetStateAction<Data>>;
};

const Fetcher = ({ setData }: FetcherProps) => {
  const [url, setUrl] = useState<string>('');

  const getEndpoint = async () => {
    try {
      const res = await axios.get(url);
      console.log(res);
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    getEndpoint();
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Paste your API endpoint here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
    </form>
  );
};

export default Fetcher;
