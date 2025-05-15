"use client";

import InfoInput from "@/components/counter-inputs/info-input";
import RangeInput from "@/components/counter-inputs/range-input";
import SelectInput from "@/components/counter-inputs/select-input";
import SelectInputNoise from "@/components/counter-inputs/select-input-noise";
import { Button } from "@/components/ui/elements-button";
import PolicyText from "@/components/ui/policy-text";
import { sendMessage } from "@/lib/send-message";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

const defaultValue = 20;
const typeValue = [
  {
    name: "Потолок (Бескаркасная изоляция)",
    sericeValue: 700,
    materialValue: 500,
  },
  {
    name: "Потолок (Каркасная изоляция)",
    sericeValue: 2500,
    materialValue: 1700,
  },
  {
    name: "Стены (Бескаркасная изоляция)",
    sericeValue: 1500,
    materialValue: 2000,
  },
  {
    name: "Стены (Каркасная изоляция)",
    sericeValue: 2200,
    materialValue: 2500,
  },
  { name: "Перегородки", sericeValue: 1700, materialValue: 2500 },
  { name: "Пол", sericeValue: 450, materialValue: 350 },
];

export type CounterForm = {
  name: string;
  phone: string;
};

interface CounterFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}
const CounterForm: React.FC<CounterFormProps> = ({ className }) => {
  const [checked, setChecked] = useState(false);
  const [square, setSquare] = useState(defaultValue);
  const [type, setType] = useState("");

  const [summService, setSummService] = useState(0);
  const [summMaterial, setSummMaterial] = useState(0);
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
    await sendMessage({ ...data, square, type, summMaterial, summService })
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
    // setSumm(square * +type);
    typeValue.map((i) => {
      if (i.name === type) {
        setSummMaterial(square * i.materialValue);
        setSummService(square * i.sericeValue);
      }
    });
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
        <SelectInputNoise
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
        <div className="flex flex-col gap-4">
          <div className="">
            <div className="text-accent-600 text-sm">Монтаж:</div>
            <div className="font-bold text-4xl text-accent-600">
              {new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(summService)}
            </div>
          </div>
          <div className="">
            <div className="text-accent-600 text-sm">Материал:</div>
            <div className="font-bold text-4xl text-accent-600">
              {new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(summMaterial)}
            </div>
          </div>
        </div>
        <Button disabled={disabled} onClick={handleSubmit(onSubmit)}>
          Отправить заявку
        </Button>
      </div>
    </form>
  );
};

export default CounterForm;
