import React, { useContext } from "react";
import { useAlert } from "./AlertContext";

const Alert = () => {
  const alert = useAlert();

  if (!alert.visible) return null;

  return (
    <div onClick={alert.toggle} className="alert alert-danger">
      Это очень важное сообщение!
    </div>
  );
};

export default Alert;
