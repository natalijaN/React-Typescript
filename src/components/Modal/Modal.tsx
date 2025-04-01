import { ReactNode } from "react";
import ReactDom from "react-dom";
import Button from "../Button/Button";

type Props = {
  open: boolean;
  handleButtonClick: (value: boolean) => void;
  children: ReactNode;
};

const Modal = ({ open, children, handleButtonClick }: Props) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
        <div className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm">
          <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
            {children}
          </div>
          <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
            Lorem ipsum dolor sit amet. Rem autem voluptates et aspernatur
            voluptates aut exercitationem modi et similique culpa. Eos itaque
            excepturi ab sunt repudiandae hic labore eaque sed quae nemo id
            optio ipsam id impedit incidunt aut assumenda corrupti!
          </div>
          <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
            <Button
              type="button"
              extraClass="bg-white hover:text-black"
              handleButtonClick={() => handleButtonClick(false)}
            >
              Cancel
            </Button>

            <Button
              type="button"
              handleButtonClick={() => handleButtonClick(false)}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")!
  );
};

export default Modal;
