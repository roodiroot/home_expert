"use client";

import { Fragment, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Dialog, Transition } from "@headlessui/react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/elements-button";
import { InputElement } from "@/components/ui/input-element";
import { sendMessage } from "@/lib/send-message";
import useModal from "@/hooks/useModal";
import PolicyText from "@/components/ui/policy-text";
import { toast } from "react-toastify";

type InputsModalForm = {
  name: string;
  phone: string;
};

const ModalSendOrder = () => {
  const { isOpen, onClose } = useModal();
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsModalForm>();
  const onSubmit: SubmitHandler<InputsModalForm> = async (data) => {
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
          ym(96375985, "reachGoal", "submit");
          reset({
            name: "",
            phone: "",
          });
          onClose();
          setDisabled(false);
        }
      })
      .finally(() => setDisabled(false));
  };

  const regExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[100]"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-[40px] bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:hidden">
                      <EnvelopeIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Отправка формы
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Благодарим Вас за выбор{" "}
                          <span className="text-accent-600 font-medium">
                            «ДомЭксперт»
                          </span>
                          ! Наш специалист свяжется с Вами в ближайшие минуты,
                          чтобы ответить на все Ваши вопросы.
                        </p>
                      </div>
                      <InputElement
                        id="name"
                        labelOn
                        placeholder="Введите имя"
                        label="Имя*"
                        className="mt-4"
                        {...register("name", { required: true })}
                        ariaInvalid={errors.name ? true : false}
                      />
                      <InputElement
                        labelOn
                        placeholder="Введите телефон"
                        id="phone"
                        label="Телефон*"
                        className="mt-4"
                        inputMode="tel"
                        {...register("phone", {
                          pattern: regExp,
                          required: true,
                        })}
                        ariaInvalid={errors.phone ? true : false}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 pb-3 sm:flex sm:px-6">
                  <PolicyText
                    checked={checked}
                    setChanged={setChecked}
                    className="mt-0"
                  />
                </div>
                <div className="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row-reverse sm:px-6 gap-3">
                  <Button
                    disabled={disabled}
                    onClick={handleSubmit(onSubmit)}
                    className="w-full "
                  >
                    Отправить
                  </Button>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={() => onClose()}
                    ref={cancelButtonRef}
                  >
                    Отмена
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalSendOrder;
