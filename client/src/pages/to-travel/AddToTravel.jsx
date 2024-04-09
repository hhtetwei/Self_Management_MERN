import {
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { isValid, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { useCreate } from '@/services/toTravel.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = z.object({
  place: z.string().min(1, { message: 'A place to travel is required!' }),
  priority: z.string().min(1, { message: 'priority need to be selected' }),
  planned_year: z.string().min(1, { message: 'planned_year is required!' }),
});

export default function AddToTravel() {
  const { mutate: createMutation } = useCreate();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    createMutation(data, {
      onSuccess: () => {
        reset();
        if (isValid) {
          showToastMessage();
        }
      },
    });
  };

  const showToastMessage = () => {
    toast.success('Successfully created To-Travel !');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center lg:mt-20">
        <Card className="w-[60%] p-5 border border-baseColor rounded-xl">
          <div className="mt-10">
            <label className="text-xl">Place</label>
            <div className="mt-5 ">
              <input
                placeholder="Add Place ..."
                className="w-full border border-baseColor rounded-lg p-5"
                {...register('place')}
              />
              <span className="text-red text-lg flex mt-3">
                {errors && errors.place?.message}
              </span>
            </div>

            <div className="mt-5">
              <FormLabel component="legend">Priority</FormLabel>
              <Controller
                control={control}
                name="priority"
                render={({ field }) => (
                  <RadioGroup {...field}>
                    <FormControlLabel
                      value="high"
                      control={<Radio />}
                      label="High"
                    />
                    <FormControlLabel
                      value="low"
                      control={<Radio />}
                      label="Low"
                    />
                  </RadioGroup>
                )}
              />
              <span className="text-red text-lg flex mt-3">
                {errors && errors.priority?.message}
              </span>
            </div>

            <div className="mt-5">
              <div className="text-lg">Planned Year</div>
              <div>
                <input
                  type="date"
                  className="rounded-lg w-[40%] mt-3 border border-baseColor p-3"
                  placeholder="Select Due Date"
                  {...register('planned_year')}
                />
                <span className="text-red text-lg flex mt-3">
                  {errors && errors.planned_year?.message}
                </span>
              </div>
            </div>

            <div className="flex justify-end mt-5">
              <button
                className="bg-baseColor p-3 rounded-lg w-[15%]"
                type="submit"
              >
                <span>Save</span>
              </button>
            </div>
          </div>
        </Card>
      </div>
      <ToastContainer />
    </form>
  );
}
