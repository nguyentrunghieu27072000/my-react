import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.107.17:3005',
    timeout: 1000,
  });

  export const loginAccount = async(data) => {
      try {
        console.log(data);
        const response = await instance.post('/auth/login', data);
        return response;
      } catch (error) {
          throw error;
      }
  }