import axios from "axios";
import {Etudiant} from "../types/Etudiant";
import {AuthUser} from "./json/requestbody/AuthUser";
import {Lostpassword} from "./json/requestbody/Lostpassword";
import { productTypes } from "@/pages/manage-products/product-type/data/product-types";
import { product } from "@/pages/manage-products/product/data/products";
import { UniteTypeschema } from "@/pages/manage-products/unite/data/schema";
import { Typejsonproduct } from "@/api/json/requestbody/product/Typejsonproduct";
import {Company} from "@/pages/company/data/schema";
import {companies} from "@/pages/company/data/companies";

const BASE_URL = "http://localhost:8080";
const instanceAxios = axios.create({ baseURL: BASE_URL });
export const getEtudiants = async () =>{
  return (await instanceAxios.get<Etudiant[]>('main/list_etudiant')).data;
}
export const SaveEtudiants = async (data: Etudiant) => {
	await instanceAxios.post("main/create_etudiant", data);
};
export const UpdateEtudiants = async (data: Etudiant) => {
	await instanceAxios.put("main/update_etudiant", data);
};
export const DeleteEtudiant = async (id: number) => {
	await instanceAxios.delete(`main/delete_etudiant?idetudiant=${id}`);
};
// scom project;
export const Authentification = async (data: AuthUser) => {
	return await instanceAxios.post("auth/authentification", data);
};
export const GenerateCoderecuperation = async (email: string) => {
	return await instanceAxios.get(`auth/generatecode?email=${email}`);
};
export const ChangePassword = async (data: Lostpassword) => {
	return await instanceAxios.post("auth/resetpassword", data);
};

// Society
export const getCompanies = async (page: number, size: number, filter?: string) => {
	// return (await instanceAxios.get<Company[]>("main/list_company?page=" + page + "&size=" + size)).data;

	//fake server response
	const items = filter ? companies.filter((company) => company.name.includes(filter)) : companies;
	const totalElements = items.length;
	const totalPages = Math.ceil(totalElements / size);
	const startIndex = (page - 1) * size;
	const endIndex = Math.min(startIndex + size, totalElements);
	const content = items.slice(startIndex, endIndex);
	return {
		content,
		page,
		size,
		totalPages,
		totalElements,
		last: page === totalPages - 1,
		first: page === 0,
		numberOfElements: content?.length,
	};
};
export const getProduit_type = async () =>{
  return (await instanceAxios.get<productTypes[]>('data/list-type-product')).data;
}
export const getProduit = async () => {
  return (await instanceAxios.get<product[]>('data/product')).data;
}
export const getUnite = async () => {
  return (await instanceAxios.get<UniteTypeschema[]>('data/unite')).data;
}
export const CreateTypeproduct = async (data: Typejsonproduct) => {
  const token = localStorage.getItem('token');
  return (await instanceAxios.post('data_save/savetypeproduct', data, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  }));
}
export const Createproduct = async (data: Typejsonproduct) => {
  const token = localStorage.getItem('token');
  return (await instanceAxios.post('data_save/saveproduct', data, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  }));
}
