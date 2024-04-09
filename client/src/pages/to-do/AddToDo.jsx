import {
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { isValid, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';

import { useCreate } from '@/services/toDo.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = z.object({
  to_do: z.string().min(1, { message: 'To-Do is required!' }),
  important: z.boolean().refine((val) => val === true, {
    message: 'Please read and accept the terms and conditions',
  }),
  due_date: z.string().min(1, { message: 'Due-date is required!' }),
});

export default function AddToDo() {
  const { mutate: createMutation } = useCreate();
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
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
  };

  const showToastMessage = () => {
    toast.success('Successfully created To-Do');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center lg:mt-20 mb-10">
          <Card className="w-[60%] p-5 border border-baseColor rounded-xl">
            <div className="mt-10">
              <label className="text-xl">To Do</label>
              <div className="mt-5 ">
                <textarea
                  type="text"
                  placeholder="ToDo..."
                  className="w-full border border-baseColor rounded-lg p-5"
                  rows={18}
                  {...register('to_do')}
                />
                <span className="text-red text-lg flex mt-3">
                  {errors && errors.to_do?.message}
                </span>
              </div>

              <div className="mt-5">
                <label className="text-xl">Important</label>
                <div className="flex gap-5 mt-2">
                  <Controller
                    control={control}
                    name="important"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <>
                        <div>
                          <label className="text-lg">
                            Yes
                            <input
                              type="radio"
                              onBlur={onBlur}
                              onChange={() => onChange(true)} // send value to hook form
                              checked={value === true}
                              style={{ margin: '5px' }}
                            />
                          </label>
                        </div>
                        <label className="text-lg">
                          No
                          <input
                            type="radio"
                            onBlur={onBlur} // notify when input is touched
                            onChange={() => onChange(false)} // send value to hook form
                            checked={value === false}
                            style={{ margin: '5px' }}
                          />
                        </label>
                      </>
                    )}
                  />
                  <span className="text-red text-lg flex mt-3">
                    {errors && errors.important?.message}
                  </span>
                </div>
              </div>
              <div className="mt-5 w-full">
                <div className="text-lg">Due-Date</div>

                <div>
                  <input
                    type="date"
                    className="rounded-lg w-[40%] mt-3 border border-baseColor p-3"
                    placeholder="Select Due Date"
                    {...register('due_date')}
                  />
                  <span className="text-red text-lg flex mt-3">
                    {errors && errors.due_date?.message}
                  </span>
                </div>
              </div>
              <div className="flex justify-end mt-5">
                <button
                  type="submit"
                  className="bg-baseColor p-3 rounded-lg w-[15%]"
                >
                  <span>Save</span>
                  <ToastContainer />
                </button>
              </div>
            </div>
          </Card>
        </div>
      </form>
    </div>
  );
}
