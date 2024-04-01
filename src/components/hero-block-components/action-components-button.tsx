import ButtonAction from "../actions/button-action";
import LinkButton from "../ui/link-button";

export const ActionComponentsBatton = () => {
  return (
    <div className="mt-10">
      <ButtonAction>Консультация</ButtonAction>
      {/* <LinkButton href={`tel:${process.env.NEXT_PUBLIC_PHONE1}`}>
        {process.env.NEXT_PUBLIC_PHONE1p}
      </LinkButton> */}
    </div>
  );
};
