import { useCreateEtudiants, useDeleteEtudiant } from "../api/mutation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEtudiants } from "../api/query";
import { Etudiant } from "../types/Etudiant";
import { useState } from "react";
import { Popup } from "./Popup";
export default function Etudiants() {
  const [selectedUser, setSelectedEtudiant] = useState<Etudiant | null>(null);
  const handleButtonClick = (Etudiant: Etudiant) => {
    setSelectedEtudiant(Etudiant);
  };
  const handleClosePopup = () => {
    setSelectedEtudiant(null);
  };
  const AllEtudiants = useEtudiants();
  const CreateEtudiant = useCreateEtudiants();
  const DeleteEtudiant = useDeleteEtudiant();
  const {register , handleSubmit } = useForm<Etudiant>();
  const HandleCreateEtudiantSubmit: SubmitHandler<Etudiant> = (data) => {
    CreateEtudiant.mutate(data);
  }
  if (AllEtudiants.isPending) {
    return <span>loading....</span>
  }
  const HandleDelete = (id: number) => {
    DeleteEtudiant.mutate(id);
  }
  return (
    <div className="xl:bg-sky-200 flex">
      <form className="w-1/2 flex flex-col bg-orange-500 p-10 gap-4" onSubmit={handleSubmit(HandleCreateEtudiantSubmit)}>
        <input className="border" placeholder="nom etudiant" {...register("name_etudiant")} />
        <input className="border" placeholder="username" {...register("username")} />
        <input className="border" placeholder="password" {...register("password")} />
        <input className="border transition ease-in-out hover:bg-sky-700 hover:duration-700" type="submit" value="valider" />
      </form>
      {
        AllEtudiants.data?.map((etudiant) => (
          <div className="bg-red-500" key={etudiant.id_etudiant}>
            <p className="bg-blue-500">{etudiant.name_etudiant}</p>
            <button onClick={() => handleButtonClick(etudiant)}>Show Details</button>
            {
              etudiant && etudiant?.id_etudiant &&(
                <button onClick={()=>HandleDelete(etudiant.id_etudiant!)}>Supprimer</button>
              ) 
            }
          </div>
      
        ))
      }
      {selectedUser && (
        <Popup data={selectedUser} onClose={handleClosePopup} />
      )}
    </div>
  )
} 