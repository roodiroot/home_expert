import ContactBlock from "@/components/page/contacts-page/contact-block";

export const metadata = {
  title: "Контактная информация",
  description:
    "Оставьте заявку на сайте, пишите в мессенджер, или просто позвоните по телефону, если планируете построить дом или сделать ремонт помещения.",
};

const ContactsPage = () => {
  return (
    <div className="">
      <ContactBlock />
    </div>
  );
};

export default ContactsPage;
