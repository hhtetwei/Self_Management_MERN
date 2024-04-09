import Link from 'next/link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Card, IconButton } from '@mui/material';
import { deleteToDo, useGetAllToDo } from '@/services/toDo.service';
import { transformDate } from '@/utils/transform-date-time';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const ToDo = () => {
  const { data: toDo } = useGetAllToDo();

  const queryClient = useQueryClient();

  const handleDelete = async (id) => {
    await deleteToDo(id);
    queryClient.invalidateQueries(['to-do']);
  };

  const templates = () => {};

  return (
    <div className="text-basicClr">
      <div className="w-full flex justify-end p-5 mr-20 ">
        <Link href={'/to-do/AddToDo'}>
          <button className="bg-baseColor p-5 rounded-lg gap-2 flex">
            <span>New To Do</span>
            <AddCircleOutlineIcon />
          </button>
        </Link>
      </div>

      {toDo?.data &&
        toDo?.data?.map((toDo, index) => {
          return (
            <div className="flex justify-center mt-10 mb-10" key={index}>
              <Card className="p-5 rounded-xl w-[50%]">
                <div className="flex ">
                  <div className="flex-1">
                    <div className="font-bold">To Do</div>
                    <div>{toDo.to_do}</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold">Important</div>
                    <div>{toDo.important === true ? 'yes' : 'no'}</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold">Due-Date</div>
                    <div>{transformDate(toDo.due_date)}</div>
                  </div>
                  <div className="mt-2">
                    <IconButton
                      onClick={() => handleDelete(toDo._id)}
                      aria-label="delete"
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default ToDo;
