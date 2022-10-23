import axios, { AxiosInstance } from 'axios';
// import { Error, GastoInputProps, GastoProps } from '../types';

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: {
    'Content-Type': 'application/json',
  }
});


class GastoService {
    async create(resultado: any): Promise<any | Error> {
        try {
            // const { data } = await api.post("/gasto", gasto);
            // return data;
        }
        catch (e:any) {
            return { error: e.message };
        }
    }


}

export default new GastoService();