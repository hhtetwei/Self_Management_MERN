import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getAllToBuy = async () => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/toBuy`, {
    method: 'GET',
  }).then(async (res) => await res.json());
};

export const useGetAllToBuy = () => {
  return useQuery({
    queryFn: () => getAllToBuy(),
    queryKey: ['to-buy'],
  });
};

const create = async (data) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/toBuy`, data).then((res) => {
    return console.log(res.data);
  });
};

export const useCreate = () => {
  return useMutation({
    mutationFn: create,
  });
};

export const deleteToBuy = async (id) => {
  return axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/toBuy/${id}`).then((res) => {
    return console.log(res.data);
  });
};

export const useDeleteToBuy = () => {
  return useMutation({
    mutationFn: deleteToBuy,
  });
};
