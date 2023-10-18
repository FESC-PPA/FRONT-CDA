import { IAdminModal } from "../../utils/types";
//import { IAdminModal } from "../../utils/type.d.ts";
export const AdminModal = ({
  children,
  id,
  title,
  label,
  css,
  atributes,
}: IAdminModal) => {
  function verModal(id) {
    var modal = document.getElementById(id);

    if (modal && modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  }
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <button
        {...atributes}
        className={css ?? "btn bg-primary text-white hover:bg-primary-light"}
        onClick={() => verModal(id)}
      >
        {label}
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-start">{title}</h3>
          {children}
        </div>
      </dialog>
    </>
  );
};
