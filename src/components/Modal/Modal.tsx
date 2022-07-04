import React, { useRef, useEffect } from "react";
import "./modal.style.scss";

const Modal = ({ children, closeModal }: { children: any; closeModal: () => void }) => {
  const wrapperRef = useRef<HTMLInputElement>(null);

  function clickOutside(e: any, closeFn: () => void) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      closeFn();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", (event) => clickOutside(event, closeModal));

    return () => {
      document.addEventListener("mousedown", (event) => clickOutside(event, closeModal));
    };
  }, [closeModal]);

  return (
    <div className="modal" ref={wrapperRef}>
      <div className="modal_container">{children}</div>
    </div>
  );
};

export default Modal;
