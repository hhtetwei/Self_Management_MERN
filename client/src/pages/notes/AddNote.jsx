import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useCreate } from '@/services/note-service.service';
import { ToastContainer, toast } from 'react-toastify';

const { Card } = require('@mui/material');

const schema = z.object({
  title: z.string(),
  notes: z.string(),
});
const AddNote = () => {
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
        reset();
      },
    });
  };

  const showToastMessage = () => {
    toast.success('Successfully created New Note');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center lg:mt-20">
          <Card className="w-[60%] p-5 border border-baseColor rounded-xl">
            <div className="">
              <input
                type="text"
                placeholder="Title ..."
                className="w-[40%] border border-baseColor rounded-lg p-5"
                {...register('title')}
              />
            </div>
            <p className="text-red">{errors.name?.title?.toString()}</p>

            <div className="mt-10">
              <label className="text-lg">Note</label>
              <div className="mt-5 ">
                <textarea
                  type="text"
                  placeholder="Note ..."
                  className="w-full border border-baseColor rounded-lg p-5"
                  rows={18}
                  {...register('notes')}
                />
              </div>
              <p className="text-red">{errors.name?.note?.toString()}</p>
              <div className="flex justify-end mt-5">
                <button
                  type="submit"
                  className="bg-baseColor p-3 rounded-lg w-[15%]"
                >
                  <span>Save</span>
                </button>
              </div>
            </div>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
