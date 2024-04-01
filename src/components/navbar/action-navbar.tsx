import { Button } from "../animation-component/button";
import { Icons } from "../ui/icons";

const ActionNavbar = () => {
  return (
    <a href={`tel:${process.env.NEXT_PUBLIC_PHONE1}`} className="">
      <Button item={<Icons.phone className="stroke-white/70 w-4" />}>
        {process.env.NEXT_PUBLIC_PHONE1p}
      </Button>
    </a>
  );
};

export default ActionNavbar;
