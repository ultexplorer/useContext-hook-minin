import React, { useContext } from "react";
import { useAlert } from "./AlertContext";

const Alert = () => {
  const alert = useAlert();

  if (!alert.visible) return null;

  return (
    <div onClick={alert.hide} className="alert alert-danger">
      {alert.text}
    </div>
  );
};

export default Alert;
