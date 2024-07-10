import axios from "axios";
import { Etudiant } from "../types/Etudiant";
const BASE_URL = "http://localhost:8080";
const instanceAxios = axios.create({ baseURL: BASE_URL });
export const getEtudiants = async () =>{
  return (await instanceAxios.get<Etudiant[]>('main/list_etudiant')).data;
}
export const SaveEtudiants = async (data: Etudiant) => {
  await instanceAxios.post('main/create_etudiant' , data);
}
export const UpdateEtudiants = async (data: Etudiant) => {
  await instanceAxios.put('main/update_etudiant', data);
}
export const DeleteEtudiant = async (id: number) => {
  await instanceAxios.delete(`main/delete_etudiant?idetudiant=${id}`)
}