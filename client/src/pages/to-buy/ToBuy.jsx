import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Link from 'next/link';
import { Card, IconButton } from '@mui/material';
import { deleteToBuy, useGetAllToBuy } from '@/services/toBuy.service';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQueryClient } from '@tanstack/react-query';

const ToBuy = () => {
  const { data: toBuy, isLoading } = useGetAllToBuy();

  const queryClient = useQueryClient();

  const handleDelete = async (id) => {
    await deleteToBuy(id);
    queryClient.invalidateQueries(['to-buy']);
  };

  return (
    <div className="text-basicClr">
      <div className="w-full flex justify-end p-5 mr-20 ">
        <Link href={'/to-buy/AddToBuy'}>
          <button className="bg-baseColor p-5 rounded-lg gap-2 flex">
            <span>New To Buy</span>
            <AddCircleOutlineIcon />
          </button>
        </Link>
      </div>
      {isLoading && <div className="text-basicClr">Loading.....</div>}
      {toBuy &&
        toBuy?.data?.map((toBuy) => {
          return (
            <div className="flex justify-center mt-10" key={toBuy}>
              <Card className="p-5 rounded-xl w-[25%]">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col w-[45%]">
                    <div className="font-bold">To Do</div>
                    <div className="">{toBuy.to_buy}</div>
                  </div>

                  <div className="w-[45%]">
                    <div className="font-bold flex ">Cost</div>
                    <div className="items-center">{toBuy.cost}</div>
                  </div>

                  <div className="mt-1">
                    <IconButton
                      onClick={() => handleDelete(toBuy._id)}
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

export default ToBuy;
