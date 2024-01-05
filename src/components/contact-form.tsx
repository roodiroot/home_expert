"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { AreaElement } from "./ui/area-element";
import { Button } from "./ui/elements-button";
import { InputElement } from "./ui/input-element";
import PolicyText from "./ui/policy-text";
import { sendMessage } from "@/lib/send-message";
import { useState } from "react";

type InputsContactForm = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [disabled, setDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsContactForm>();
  const onSubmit: SubmitHandler<InputsContactForm> = async (data) => {
    setDisabled(true);
    await sendMessage(data)
      .then((d) => {
        if (d) {
          reset();
          setDisabled(false);
        }
      })
      .finally(() => setDisabled(false));
  };

  const regExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  return (
    <form
      onClick={(e) => e.preventDefault}
      className='mx-auto mt-16 max-w-xl sm:mt-20'
    >
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
        <InputElement
          id='name'
          labelOn
          placeholder='Введите имя'
          label='Имя*'
          {...register("name", { required: true })}
          ariaInvalid={errors.name ? true : false}
        />
        <InputElement
          labelOn
          placeholder='Введите телефон'
          id='phone'
          label='Телефон*'
          {...register("phone", { pattern: regExp, required: true })}
          ariaInvalid={errors.phone ? true : false}
        />
        <InputElement
          labelOn
          placeholder='Введите email'
          id='email'
          label='Email'
          {...register("email", { pattern: /.+@.+\..+/i })}
          ariaInvalid={errors.email ? true : false}
          className='sm:col-span-2'
        />
        <AreaElement
          id='message'
          label='Сообщение'
          labelOn
          {...register("message")}
          className='sm:col-span-2'
        />
        <PolicyText className='sm:col-span-2' />
      </div>
      <Button
        disabled={disabled}
        onClick={handleSubmit(onSubmit)}
        className='w-full mt-10'
      >
        Отправить
      </Button>
    </form>
  );
};

export default ContactForm;
