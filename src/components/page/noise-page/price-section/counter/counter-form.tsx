"use client";

import InfoInput from "@/components/counter-inputs/info-input";
import RangeInput from "@/components/counter-inputs/range-input";
import SelectInput from "@/components/counter-inputs/select-input";
import { Button } from "@/components/ui/elements-button";
import PolicyText from "@/components/ui/policy-text";
import { sendMessage } from "@/lib/send-message";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

const defaultValue = 20;
const typeValue = [
  { name: "Потолок", value: "750" },
  { name: "Стены", value: "1700" },
  { name: "Перегородки", value: "500" },
  { name: "Пол", value: "2500" },
];

export type CounterForm = {
  name: string;
  phone: string;
};

interface CounterFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}
const CounterForm: React.FC<CounterFormProps> = ({ className }) => {
  const [checked, setChecked] = useState(false);
  const [square, setSquare] = useState(defaultValue);
  const [type, setType] = useState("0");

  const [summ, setSumm] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CounterForm>();

  const onSubmit: SubmitHandler<CounterForm> = async (data) => {
    if (!checked) {
      toast.info(
        "Вы должны согласиться с условиями обработки персональных данных"
      );
      return;
    }
    setDisabled(true);
    await sendMessage({ ...data, square, type, summ })
      .then((d) => {
        if (d) {
          //@ts-ignore
          ym(96375985, "reachGoal", "calculation");
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

  useEffect(() => {
    setSumm(square * +type);
  }, [square, type]);

  return (
    <form className={className} action="" onClick={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6">
        <RangeInput
          title="1. Общая площадь квартиры в квадратных метрах"
          description="Укажите площадь квартиры от 10 до 200 м²"
          value={square}
          setValue={setSquare}
          defaultValue={defaultValue}
        />
        <SelectInput
          title="2. Тип поверхности"
          label="Типы поверхности"
          setValue={setType}
          placeholder="Выберите тип"
          values={typeValue}
        />
        <InfoInput
          id="name"
          title="Введите ваше имя"
          placeholder="Ваше имя"
          register={register}
          errors={errors}
        />
        <InfoInput
          id="phone"
          title="Введите ваш номер"
          placeholder="Ваш телефон"
          inputMode="tel"
          pattern={regExp}
          register={register}
          errors={errors}
        />
        <div className="">
          <PolicyText checked={checked} setChanged={setChecked} />
        </div>
      </div>
      <div className="mt-10 flex justify-between items-end border-t pt-8">
        <div className="font-bold text-5xl text-accent-600">
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(summ)}
        </div>
        <Button disabled={disabled} onClick={handleSubmit(onSubmit)}>
          Отправить заявку
        </Button>
      </div>
    </form>
  );
};

export default CounterForm;
