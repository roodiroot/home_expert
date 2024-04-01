import { Icons } from "../ui/icons";

const BunnerKondish = () => {
  return (
    <div className="relative w-full overflow-hidden pb-10">
      <div className="mx-auto max-w-7xl lg:flex sm:px-6 lg:px-8">
        <div className="relative w-full bg-[#F97316] p-6 sm:rounded-lg flex flex-col gap-y-4 items-start justify-between sm:flex-row">
          <div className="flex-1 max-w-lg text-balance">
            <div className="text-white text-2xl font-medium lg:text-3xl">
              Установка кондиционеров и сплит систем
            </div>
            <div className="text-white/70">
              Качественно устанавливаем кондиционеры в Москве и области.
            </div>
          </div>
          <div className="">
            <Icons.kondish className="w-[150px] h-auto" />
          </div>
          <a
            href="https://kondish.su"
            target="_blank"
            className="absolute inset-0"
          />
        </div>
      </div>
    </div>
  );
};
export default BunnerKondish;
