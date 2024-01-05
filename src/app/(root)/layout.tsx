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
    </section>
  );
}
