import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getAllTravel = async () => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/toTravel`, {
    method: 'GET',
  }).then(async (res) => await res.json());
};

export const useGetAllTravel = () => {
  return useQuery({
    queryFn: () => getAllTravel(),
    queryKey: ['to-travel'],
  });
};

const create = async (data) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/toTravel`, data).then((res) => {
    return console.log(res.data);
  });
};

export const useCreate = () => {
  return useMutation({
    mutationFn: create,
  });
};
