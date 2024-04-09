import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getNotes = async () => {
  const limit = 0;
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes?limit=${limit}`, {
    method: 'GET',
  }).then(async (res) => await res.json());
};

export const useGetAllNotes = () => {
  return useQuery({
    queryFn: () => getNotes(),
    queryKey: ['notes'],
  });
};

const create = async (data) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/notes`, data).then((res) => {
    return console.log(res.data);
  });
};

export const useCreate = () => {
  return useMutation({
    mutationFn: create,
  });
};

export const deleteNote = async (id) => {
  return axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`).then((res) => {
    return console.log(res.data);
  });
};

export const useDeleteNote = () => {
  return useMutation({
    mutationFn: deleteNote,
  });
};
