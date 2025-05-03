"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { AreaElement } from "./ui/area-element";
import { Button } from "./ui/elements-button";
import { InputElement } from "./ui/input-element";
import PolicyText from "./ui/policy-text";
import { sendMessage } from "@/lib/send-message";
import { useState } from "react";
import { toast } from "react-toastify";

type InputsContactForm = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsContactForm>();
  const onSubmit: SubmitHandler<InputsContactForm> = async (data) => {
    if (!checked) {
      toast.info(
        "Вы должны согласиться с условиями обработки персональных данных"
      );
      return;
    }
    setDisabled(true);
    await sendMessage(data)
      .then((d) => {
        if (d) {
          //@ts-ignore
          ym(96375985, "reachGoal", "feedback");
          reset({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
          setDisabled(false);
        }
      })
      .finally(() => setDisabled(false));
  };

  const regExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  return (
    <form
      onClick={(e) => e.preventDefault}
      className="mx-auto mt-16 max-w-xl sm:mt-20"
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <InputElement
          id="name"
          labelOn
          placeholder="Введите имя"
          label="Имя*"
          {...register("name", { required: true })}
          ariaInvalid={errors.name ? true : false}
        />
        <InputElement
          labelOn
          placeholder="Введите телефон"
          id="phone"
          label="Телефон*"
          inputMode="tel"
          {...register("phone", { pattern: regExp, required: true })}
          ariaInvalid={errors.phone ? true : false}
        />
        <InputElement
          labelOn
          placeholder="Введите email"
          id="email"
          inputMode="email"
          label="Email"
          {...register("email", { pattern: /.+@.+\..+/i })}
          ariaInvalid={errors.email ? true : false}
          className="sm:col-span-2"
        />
        <AreaElement
          id="message"
          label="Сообщение"
          labelOn
          {...register("message")}
          className="sm:col-span-2"
        />
        <PolicyText
          checked={checked}
          setChanged={setChecked}
          className="sm:col-span-2"
        />
      </div>
      <Button
        disabled={disabled}
        onClick={handleSubmit(onSubmit)}
        className="w-full mt-10 "
      >
        Отправить
      </Button>
    </form>
  );
};

export default ContactForm;
