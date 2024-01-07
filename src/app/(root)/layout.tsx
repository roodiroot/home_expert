import AbsoluteElements from "@/components/absolute-elements/absolute-elements";
import FooterSection from "@/components/ui/footer-section";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <FooterSection />
      <AbsoluteElements />
    </section>
  );
}
