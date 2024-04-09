import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getToDo = async () => {
  const limit = 0;
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/toDo?limit=${limit}`, {
    method: 'GET',
  }).then(async (res) => await res.json());
};

export const useGetAllToDo = () => {
  return useQuery({
    queryFn: () => getToDo(),
    queryKey: ['to-do'],
  });
};

const create = async (data) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/toDo`, data).then((res) => {
    return console.log(res.data);
  });
};

export const useCreate = () => {
  return useMutation({
    mutationFn: create,
  });
};

export const deleteToDo = async (id) => {
  return axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/toDo/${id}`).then((res) => {
    return console.log(res.data);
  });
};

export const useDeleteToDo = () => {
  return useMutation({
    mutationFn: deleteToDo,
  });
};
