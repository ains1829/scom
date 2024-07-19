import { Administration } from "@/pages/manage-users/class/Administration";
import { PageAdmintration } from "@/pages/manage-users/class/PageAdmintration";
import axios from "axios";
const BASE_URL = "http://localhost:8080";
const instanceAxios = axios.create({ baseURL: BASE_URL });
export const getAdministration = async () => {
  return (await instanceAxios.get<Administration[]>('data/list-administrator')).data;
}
export const getMissionnaire = async (page : number , region : number) => {
  return (await instanceAxios.get<PageAdmintration>(`data/missionnaire?page=${page}&region=${region}`)).data;
}