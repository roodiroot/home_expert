import ContactForm from "@/components/contact-form";
import { DescriptionElement, TitleElement } from "@/components/ui/h2-element";

interface ContactSectionProps {
  pattern?: React.ReactNode;
}
const ContactSection: React.FC<ContactSectionProps> = ({ pattern }) => {
  return (
    <div className='relative  px-6 py-24 sm:py32 lg:px-4'>
      {pattern}
      <div className='mx-auto max-w-2xl text-center'>
        <TitleElement text='Еще остались вопросы?' />
        <DescriptionElement
          text='Заполните форму обратной связи, и ожидайте звонка наших специалистов. Они свяжутсяс вами в течении 10ти миут.'
          className='mt-2 text-lg leading-8'
        />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
