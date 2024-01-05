"use client";

import { Button } from "../ui/elements-button";
import { InputElement } from "../ui/input-element";

interface CounterFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}
const CounterForm: React.FC<CounterFormProps> = ({ className }) => {
  return (
    <form className={className} action='' onClick={(e) => e.preventDefault()}>
      <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
        {/* <InputElement
          labelOn
          placeholder='Введите имя'
          id='name'
          label='Имя*'
        />
        <InputElement
          labelOn
          placeholder='Введите телефон'
          id='phone'
          label='Телефон*'
        />
        <InputElement
          labelOn
          placeholder='Введите email'
          id='email'
          label='Email'
          className='sm:col-span-2'
        />
        <AreaElement
          id='message'
          label='Сообщение'
          labelOn
          className='sm:col-span-2'
        /> */}
      </div>
      <div className='mt-10 flex justify-end border-t pt-8'>
        <Button>Рассчитать</Button>
      </div>
    </form>
  );
};

export default CounterForm;
