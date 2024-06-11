import React from "react";
import { useEffect } from "react";
const Modal = ({ onClose, children, actionBar }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    // clean up function
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"></div>
      <div className="fixed inset-60 bg-white p-10 rounded-xl shadow-xl">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
