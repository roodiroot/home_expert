import Actions from "@/components/not-found/actions";
import Logo from "@/components/ui/logo";

const Error = () => {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <div className="p-4">
          <Logo />
        </div>
        <p className="text-base font-semibold text-accent">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Страница не найдена
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          К сожалению, мы не смогли найти страницу, которую вы ищете
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Actions />
        </div>
      </div>
    </main>
  );
};

export default Error;
