import React from 'react';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Data } from '../interfaces/data.interface';

type FetcherProps = {
  setData: React.Dispatch<React.SetStateAction<Data>>;
};

type FormValues = {
  url: string;
};

const Fetcher = ({ setData }: FetcherProps) => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    getEndpoint(data.url);
  };

  const getEndpoint = async (path: string) => {
    try {
      const res = await axios.get(path);
      console.log(res);
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="url"
        placeholder="Paste your API endpoint here..."
        ref={register}
      />
    </form>
  );
};

export default Fetcher;
