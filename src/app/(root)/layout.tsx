import AbsoluteElements from "@/components/absolute-elements/absolute-elements";
import FooterSection from "@/components/ui/footer-section";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Script src='//code.jivo.ru/widget/xB4NlpkD2H' async /> */}
      <section>
        {children}
        <FooterSection />
        <AbsoluteElements />
      </section>
    </>
  );
}
