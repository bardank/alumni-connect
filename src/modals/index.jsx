import { FC, HTMLAttributes, useEffect, useRef } from "react";
import { useModal } from "../customHooks/useModal";

// interface Props extends HTMLAttributes<HTMLDivElement> {
//   title: string;
//   headerClass?: string;
//   showHeader?: boolean;
//   showInnerPadding?: boolean;
//   maxWidthClass?: string;
//   minWidthClass?: string;
//   overflow?: boolean;
//   useOutsideClickDetector?: boolean;
//   id?: string;
//   onClose?: () => void;
//   childrenCenter?: boolean;
//   svgClass?: string;
//   closeBtnText?: string;
// }

const Modal = ({
  children,
  title,
  headerClass,
  maxWidthClass,
  minWidthClass,
  showInnerPadding = true,
  showHeader = true,
  overflow = false,
  useOutsideClickDetector,
  onClose,
  childrenCenter = false,
  svgClass = "",
  closeBtnText = "",
  ...props
}) => {
  const modalAreaRef = useRef(null);
  const { closeModal, modalJsx } = useModal();

  function escapeHandler(e) {
    const key = e.key || e.keyCode;
    if (key === "Escape" || key === "Esc" || key === 27) {
      closeModal();
    }
  }

  function handleOutsideClick(e) {
    console.log("modal bubble");
    // const rect = modalAreaRef.current!.getBoundingClientRect()
    // console.log(rect)
    // const div = document.createElement('div')
    // const s: Partial<CSSStyleDeclaration> = {
    //   display: 'absolute',
    //   top: rect.top.toString(),
    //   left: rect.left.toString(),
    //   right: rect.right.toString(),
    //   bottom: rect.bottom.toString(),
    //   border: '2px solid darkblue'
    // }

    // for (const [prop, val] of Object.entries(s)) {
    //   div.style.setProperty(prop, val as string)
    // }
    // document.body.appendChild(div)

    if (
      e.target instanceof HTMLElement &&
      !modalAreaRef.current?.contains(e.target )
    ) {
      onClose?.();
      closeModal();
    }
  }
  useEffect(() => {
    setTimeout(() => {
      if (useOutsideClickDetector) {
        document.addEventListener("click", handleOutsideClick);
      }
      document.addEventListener("keydown", escapeHandler);
    });

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", escapeHandler);
    };
  }, []);

  return (
    <div
      {...props}
      className="fixed allow-overflow top-0 left-0 h-screen w-screen bg-black bg-opacity-70 flex flex-col justify-center items-center z-[20000]"
    >
      <div
        ref={modalAreaRef}
        className={`bg-gray-200 rounded-2xl overflow-auto drop-shadow ${maxWidthClass} ${minWidthClass} z-[999999] flex flex-col`}
      >
        {showHeader && (
          <div
            className={`flex rounded-t-2xl  p-6 justify-between items-center ${
              headerClass ? headerClass : ""
            }`}
          >
            <span
              className={`font-semibold text-2xl 
              }`}
            >
              {title}
            </span>
            <button
              type="button"
              className="flex gap-x-2 items-center"
              onClick={() => {
                onClose?.();
                closeModal();
              }}
            >
              {closeBtnText}
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 17.5L17 1.5"
                  stroke="#170F49"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={` ${svgClass}`}
                />
                <path
                  d="M17 17.5L1 1.5"
                  stroke="#170F49"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={` ${svgClass}`}
                />
              </svg>
            </button>
          </div>
        )}
        <div
          className={`flex w-full flex-col ${
            overflow ? "!overflow-auto" : "hide-overflow overflow-y-auto"
          }  ${showInnerPadding ? "px-6 pb-6 " : ""} ${
            childrenCenter ? "justify-center items-center h-[95vh] w-fit" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  showInnerPadding: true,
  showHeader: true,
  overflow: false,
  useOutsideClickDetector: true,
};

export default Modal;
