import { DescriptionElement, TitleElement } from "@/components/ui/h2-element";
import PromptForm from "@/components/prompt-form";

const SendMessageSection = () => {
  return (
    <div className="relative bg-accent-600 py-16 sm:py-24 lg:py-32 overflow-hidden">
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute z-0 -top-1/2 left-0  size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#2E25BF" />
            <stop offset={1} stopColor="#2E25BF" />
          </radialGradient>
        </defs>
      </svg>
      <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl lg:col-span-6">
          <TitleElement text="Отправьте ваш номер" className="text-white" />
          <DescriptionElement
            className="mt-4 text-white/80"
            text="Наши специалисты перезвонят в течении 5 минут и уточнят более удобное время для связи с вами. Далее вы обсудите все важные нюансы работы"
          />
        </div>
        <PromptForm />
      </div>
    </div>
  );
};

export default SendMessageSection;
