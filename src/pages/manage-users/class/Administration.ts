import { Region } from "@/pages/company/lieu/Region";
import { Profil } from "./Profil";

export interface Administration{
  idadministration : string;
  nameadministration : string;
  matricule : string;
  email : string;
  telephone : string;
  birthday : Date;
  gender : number;
  addresse : string;
  photo : string;
  profil : Profil;
  region : Region;
  haveaccount : boolean;
  isactive:boolean;
}