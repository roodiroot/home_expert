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
      {/* <BeforeUnloadComponent /> */}
    </div>
  );
};

export default AbsoluteElements;
