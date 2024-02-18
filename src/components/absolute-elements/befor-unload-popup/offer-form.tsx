"use client";

import PromptForm from "@/components/prompt-form";
import { sendMessage } from "@/lib/send-message";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface OfferForm {
  handleUnsubscription: () => void;
}

type SaleForm = {
  phone: string;
};
const OfferForm: React.FC<OfferForm> = ({ handleUnsubscription }) => {
  const [disabled, setDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SaleForm>();

  const onSubmit: SubmitHandler<SaleForm> = async (data) => {
    setDisabled(true);
    await sendMessage({ ...data, form: "Скидка 35%" })
      .then((d) => {
        if (d) {
          //@ts-ignore
          ym(96375985, "reachGoal", "submit");
          reset({
            phone: "",
          });
          setDisabled(false);
          handleUnsubscription();
        }
      })
      .finally(() => setDisabled(false));
  };

  const regExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  return (
    <form className='flex flex-col items-center gap-4'>
      <input
        className='border-b px-4 py-2  text-center placeholder:font-light placeholder:text-gray-300 placeholder:text-center focus:outline-none'
        type='tel'
        placeholder='8 (900) 000-00-00'
        aria-label='Номер телефона'
        aria-invalid={errors.phone ? true : false}
        id='phone'
        inputMode='tel'
        {...register("phone", { pattern: regExp, required: true })}
      />
      <button
        disabled={disabled}
        type='submit'
        onClick={handleSubmit(onSubmit)}
        className='py-1.5 px-4 font-light bg-gray-700 text-white rounded-full hover:bg-gray-600 disabled:bg-gray-600'
      >
        Отправить
      </button>
    </form>
  );
};

export default OfferForm;
