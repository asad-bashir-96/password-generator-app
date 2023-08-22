"use client";
import React, { useRef } from "react";
import { editPassword, deletePassword } from "@/lib/actions";

type ModalProps = {
  id: number;
  //determines if the edit or delete form gets shown
  showEdit: boolean;
};

function Modal({ id, showEdit }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  function openModal() {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }

  function closeModal() {
    if (modalRef.current) {
      modalRef.current.close();
    }
  }

  return (
    <>
      <button
        className="bg-transparent border-none btn hover:bg-transparent outline-none absolute top-0 w-full left-0 "
        onClick={openModal}
      ></button>
      <dialog ref={modalRef} className="modal">
        {showEdit ? (
          <form
            action={editPassword}
            className="bg-secondaryDark text-slate-200 modal-box"
          >
            <h3 className="text-2xl">Edit saved password</h3>
            <div className="flex flex-col gap-2 mt-5">
              <label className="block " htmlFor="newpassword">
                Enter new password
              </label>
              <input type="text" hidden name="id" defaultValue={id} />

              <input
                className="p-1 text-black text-xl bg-white  w-80 rounded border  focus:outline-accent"
                type="text"
                name="newpassword"
                id="newpassword"
              />
            </div>

            <div className="flex justify-between mt-5 ">
              <button
                type="button"
                className="w-20 p-3 hover:text-primary transition duration-150 ease-in rounded bg-accent text-slate-200"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="w-20 rounded transition duration-150 ease-in hover:text-accent bg-primary text-slate-200"
                onClick={closeModal}
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <form
            action={deletePassword}
            className="bg-secondaryDark flex flex-col gap-6 text-slate-200 modal-box"
          >
            <h3 className="text-2xl">Delete saved password</h3>
            <p className="cl">Are you sure you want to delete this password</p>
            <input type="text" hidden name="id" defaultValue={id} />

            <div className="flex justify-between  ">
              <button
                type="button"
                className="w-20 p-3 hover:text-primary transition duration-150 ease-in rounded bg-accent text-slate-200"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="w-20 rounded transition duration-150 ease-in hover:text-accent bg-red-800 text-slate-200"
                onClick={closeModal}
              >
                Delete
              </button>
            </div>
          </form>
        )}
      </dialog>
    </>
  );
}

export default Modal;
