const { Card } = require('@mui/material');
import { isValid, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCreate } from '@/services/toBuy.service';

const schema = z.object({
  to_buy: z.string().min(1, { message: 'At least one to-buy is required!' }),
  cost: z.string().min(1, { message: 'cost is required!' }),
});

const AddToBuy = () => {
  const { mutate: createMutation } = useCreate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    createMutation(data, {
      onSuccess: () => {
        if (isValid) {
          showToastMessage();
        }
        reset();
      },
    });
    const showToastMessage = () => {
      toast.success('Successfully Created To-Buy !');
    };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center lg:mt-20">
        <Card className="w-[40%] p-5 border border-baseColor rounded-xl">
          <label className="text-lg">To Buy</label>
          <div className="mt-5">
            <input
              {...register('to_buy')}
              type="text"
              placeholder="Add To Buy..."
              className="w-[50%] border border-baseColor rounded-lg p-5"
            />
            <span className="text-red text-lg flex mt-3">
              {errors && errors.to_buy?.message}
            </span>
          </div>

          <div className="mt-10">
            <label className="text-lg">Cost</label>
            <div className="mt-5 ">
              <input
                {...register('cost')}
                type="text"
                placeholder="Add cost..."
                className="w-[50%] border border-baseColor rounded-lg p-5"
              />
              <span className="text-red text-lg flex mt-3">
                {errors && errors.cost?.message}
              </span>
            </div>
            <div className="flex justify-end mt-5">
              <button
                className="bg-baseColor p-3 rounded-lg w-[15%]"
                type="submit"
              >
                <span>Save</span>
                <ToastContainer />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </form>
  );
};

export default AddToBuy;
