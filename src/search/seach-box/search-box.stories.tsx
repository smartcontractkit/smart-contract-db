import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Meta } from '@storybook/react';
import { Button } from '@/atoms/button';
import { FormInput } from './form-input';

export default {
  title: 'Molecule/Form Input',
  component: FormInput,
} as Meta;

type FormInputForm = {
  formInputField: string;
};

export const Validation: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputForm>();

  return (
    <div className="w-full mx-auto md:w-1/2">
      <form onSubmit={handleSubmit(console.log)} className="flex flex-wrap items-start justify-center">
        <FormInput
          id="my-text-input"
          name="formInputField"
          className="w-full mb-4 mr-0 md:w-auto md:mb-0 md:mr-4"
          placeholder="Enter a web page URL"
          label="Enter a web page URL"
          register={register}
          rules={{ required: 'A webpage URL is required.' }}
          errors={errors}
        />
        <Button type="submit" className="w-full mb-8 md:w-auto md:mb-14">
          Submit
        </Button>
      </form>
    </div>
  );
};
