import React, { PropsWithChildren } from "react";
import PopUpNotification from "../components/UI/PopupNotification";
import { useModal } from "../customHooks/useModal";
import  useNotificationStore from "../customHooks/useNotification";

const DefaultLayout = ({ children }) => {
  const { modalJsx, showModal } = useModal();
  const { notifications } = useNotificationStore((state) => state);

  return (
    <div className={`flex h-screen `}>
      <PopUpNotification notifications={notifications} />
      {showModal
        ? [...modalJsx].map((el, i) => (
            <React.Fragment key={i}>{el}</React.Fragment>
          ))
        : null}
      {children}
    </div>
  );
};

export default DefaultLayout;
