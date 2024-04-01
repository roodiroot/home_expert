import MenuMobil from "../mobil-menu/mobil-menu";
import CallWidget from "../widgets/call-widget";
import BeforeUnloadComponent from "./befor-unload-popup/before-unload";
import ModalSendOrder from "./modal-send-order";
import Notifications from "./notifications";

const AbsoluteElements = () => {
  return (
    <div>
      <CallWidget />
      <Notifications />
      <ModalSendOrder />
      <MenuMobil />
      {/* <BeforeUnloadComponent /> */}
    </div>
  );
};

export default AbsoluteElements;
