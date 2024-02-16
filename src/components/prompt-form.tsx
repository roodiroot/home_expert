"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "./ui/elements-button";
import { InputElement } from "./ui/input-element";
import PolicyText from "./ui/policy-text";
import { sendMessage } from "@/lib/send-message";
import { useState } from "react";

type PromptForm = {
  name: string;
  phone: string;
};

const PromptForm = () => {
  const [disabled, setDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PromptForm>();

  const onSubmit: SubmitHandler<PromptForm> = async (data) => {
    setDisabled(true);
    await sendMessage(data)
      .then((d) => {
        if (d) {
          //@ts-ignore
          ym(96375985, "reachGoal", "submit");
          reset({
            name: "",
            phone: "",
          });
          setDisabled(false);
        }
      })
      .finally(() => setDisabled(false));
  };

  const regExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  return (
    <form
      className='max-w-xl w-full lg:col-span-6 pt-2'
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <div className='flex gap-4 flex-col items-start sm:flex-row sm:items-end'>
        <InputElement
          variant='dark'
          id='name'
          labelOn
          placeholder='Введите имя'
          label='Имя*'
          {...register("name", { required: true })}
          ariaInvalid={errors.name ? true : false}
        />
        <InputElement
          variant='dark'
          labelOn
          placeholder='Введите телефон'
          id='phone'
          inputMode='tel'
          label='Телефон*'
          {...register("phone", { pattern: regExp, required: true })}
          ariaInvalid={errors.phone ? true : false}
        />
        <Button
          className='bg-white hover-bg-white/90 text-gray-900'
          disabled={disabled}
          onClick={handleSubmit(onSubmit)}
        >
          Отправить
        </Button>
      </div>
      <PolicyText variant='dark' />
    </form>
  );
};

export default PromptForm;
