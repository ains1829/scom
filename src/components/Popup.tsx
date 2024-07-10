import { SubmitHandler, useForm } from "react-hook-form";
import { Etudiant } from "../types/Etudiant";
import { useEffect } from "react";
import { useUpdateEtudiants } from "../api/mutation";

export function Popup({ data, onClose }: { data: Etudiant | null, onClose: () => void }) {
  const Updatetudiant = useUpdateEtudiants();
  const { register, handleSubmit, reset } = useForm<Etudiant>({
    defaultValues: data || { id_etudiant: 0, username:'', name_etudiant: '', password: '' },
  });

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  const onSubmit: SubmitHandler<Etudiant> = data => {
    Updatetudiant.mutate(data)
    onClose();
  };
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>data Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>ID</label>
            <input {...register("id_etudiant")} readOnly />
          </div>
          <div>
            <label>Name</label>
            <input {...register("name_etudiant")} />
          </div>
          <div>
            <label>username</label>
            <input {...register("username")} />
          </div>
          <div>
            <label>password</label>
            <input {...register("password")} />
          </div>
          <button type="submit">Save</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}