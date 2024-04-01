import AbsoluteElements from "@/components/absolute-elements/absolute-elements";
import Navbar from "@/components/navbar/navbar";
import FooterSection from "@/components/ui/footer/footer-section";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <FooterSection />
      <AbsoluteElements />
    </>
  );
}
