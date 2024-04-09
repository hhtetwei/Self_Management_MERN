import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import Link from 'next/link';
import {
  deleteNote,
  useGetAllNotes,
} from '../../services/note-service.service';
import { Card, IconButton } from '@mui/material';
import { transformDate } from '@/utils/transform-date-time';
import axios from 'axios';

const Notes = () => {
  const { data: notes, count, isLoading } = useGetAllNotes();
  console.log({notes});
  const queryClient = useQueryClient();

  const handleDelete = async (id) => {
    await deleteNote(id);
    queryClient.invalidateQueries(['notes']);
  };

  return (
    <div className="text-basicClr w-full h-full">
      <div className="w-full flex justify-end p-5 mr-20 ">
        <Link href={'/notes/AddNote'}>
          <button className="bg-baseColor p-5 rounded-lg gap-2 flex">
            <span>New Note</span>
            <AddCircleOutlineIcon />
          </button>
        </Link>
      </div>

      {isLoading && (
        <div className="text-basicClr flex justify-center">Loading....</div>
      )}

      {notes?.data?.data &&
        notes.data?.data.map((note) => {
          return (
            <div className="flex justify-center mb-5" key={note.id}>
              {!isLoading && (
                <Card className="p-5 rounded-xl w-[60%] mt-10">
                  <div className="p-3 mx-5 flex justify-between">
                    <div className="w-[45%]">{note.notes}</div>
                    <div className="w-[45%] flex justify-end">
                      {transformDate(note.createdAt)}
                    </div>

                    <div className="-mt-2">
                      <IconButton
                        onClick={() => handleDelete(note._id)}
                        aria-label="delete"
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Notes;
