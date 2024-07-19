import {useQuery} from "@tanstack/react-query";
import {getCompanies, getEtudiants, getProduit_type} from "./api";

export function useEtudiants() {
	return useQuery({
		queryKey: ["etudiants"],
		queryFn: getEtudiants,
	});
}
export function useTypeProduct() {
	return useQuery({
		queryKey: ["types-product"],
		queryFn: getProduit_type,
	});
}

// Company
export function useCompanies(page = 1, size = 10, filter?: string) {
	return useQuery({
		queryKey: ["companies", page, size],
		queryFn: () => getCompanies(page, size, filter),
	});
}
