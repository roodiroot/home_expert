"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import RangeInput from "../counter-inputs/range-input";
import { Button } from "../ui/elements-button";
import SelectInput from "../counter-inputs/select-input";
import TotalSumm from "../counter-inputs/total-summ";
import InfoInput from "../counter-inputs/info-input";
import { sendMessage } from "@/lib/send-message";
import PolicyText from "../ui/policy-text";

const defaultValue = 35;
const typeValue = [
  { name: "Новостройка", value: "12500" },
  { name: "Коттедж", value: "12000" },
  { name: "Вторичка", value: "14000" },
];
const disignValue = [
  { name: "Надо", value: "20000" },
  { name: "Уже есть", value: "0" },
];
const typeProces = [
  { name: "Капитальный", value: "1" },
  { name: "Косметический", value: "0.25" },
];
// const floorValues = [
//   { name: "Без покрытия", value: "0" },
//   { name: "Плитка", value: "450" },
//   { name: "Ламинат", value: "550" },
//   { name: "Линолиум", value: "300" },
// ];

export type CounterForm = {
  name: string;
  phone: string;
};

interface CounterFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}
const CounterForm: React.FC<CounterFormProps> = ({ className }) => {
  const [square, setSquare] = useState(defaultValue);
  const [type, setType] = useState("0");
  const [typeProc, setTypeProc] = useState("0");
  const [disign, setDisign] = useState("0");

  const [summ, setSumm] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CounterForm>();

  const onSubmit: SubmitHandler<CounterForm> = async (data) => {
    setDisabled(true);
    await sendMessage({ ...data, square, type, typeProc, disign, summ })
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
    setSumm(square * +type * +typeProc + +disign);
  }, [square, type, disign, typeProc]);

  return (
    <form className={className} action='' onClick={(e) => e.preventDefault()}>
      <div className='grid grid-cols-1 gap-x-8 gap-y-6'>
        <RangeInput
          title='1. Общая площадь квартиры в квадратных метрах'
          description='Укажите площадь квартиры от 10 до 200 м²'
          value={square}
          setValue={setSquare}
          defaultValue={defaultValue}
        />
        <SelectInput
          title='2. Тип жилья'
          label='Типы недвижимости'
          setValue={setType}
          placeholder='Выберите тип'
          values={typeValue}
        />
        <SelectInput
          title='3. Тип ремонта'
          label='Типы ремонта'
          setValue={setTypeProc}
          placeholder='Выберите тип'
          values={typeProces}
        />
        <SelectInput
          title='4. Разработка дизайн проекта'
          setValue={setDisign}
          placeholder='Выберите нужное'
          values={disignValue}
        />
        {/* <SelectInput
          title='4. Покрытие пола'
          label='Типы покрытий'
          setValue={setFloor}
          placeholder='Выберите нужное'
          values={floorValues}
        /> */}
        {/* <TotalSumm
          title='Стоимость ремонта*'
          description='*Стоимость ремонта является приблизительной и не может являться публичной офертой. Для точного расчета оставьте заявку ниже.'
          value={summ}
        /> */}
        <InfoInput
          id='name'
          title='Введите ваше имя'
          placeholder='Ваше имя'
          register={register}
          errors={errors}
        />
        <InfoInput
          id='phone'
          title='Введите ваш номер'
          placeholder='Ваш телефон'
          inputMode='tel'
          pattern={regExp}
          register={register}
          errors={errors}
        />
        <PolicyText />
      </div>
      <div className='mt-10 flex justify-end border-t pt-8'>
        <Button disabled={disabled} onClick={handleSubmit(onSubmit)}>
          Заказать ремонт
        </Button>
      </div>
    </form>
  );
};

export default CounterForm;
