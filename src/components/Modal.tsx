import NewPasswordForm from "./NewPasswordForm";

type ModalProps = {
  type: "edit" | "delete";
};

export default function Modal({ type }: ModalProps) {
  if (type === "edit") {
    return (
      <div className="absolute w-full h-full  flex justify-center items-center bg-black/30">
        <NewPasswordForm />
      </div>
    );
  }
  return (
    <div className="absolute w-full h-screen flex justify-center items-center bg-black/30">
      <NewPasswordForm />
    </div>
  );
}
