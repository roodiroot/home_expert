import { DescriptionElement, TitleElement } from "@/components/ui/h2-element";
import PromptForm from "@/components/prompt-form";

const SendMessageSection = () => {
  return (
    <div className='bg-white py-16 sm:py-24 lg:py-32'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8'>
        <div className='max-w-xl lg:col-span-6'>
          <TitleElement text='Отправьте ваш номер' />
          <DescriptionElement
            className='mt-4'
            text='Наши специалисты перезвонят в течении 5ти минут и уточнят более удобное время для связи с вами. Далее вы обсудите все важные нюансы работы'
          />
        </div>
        <PromptForm />
      </div>
    </div>
  );
};

export default SendMessageSection;
