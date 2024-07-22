import {useQuery} from "@tanstack/react-query";
import {getAnomaly, getCompanies, getProduit, getProduit_type, getProfil, getUnite} from "./api";
export function useTypeProduct() {
	return useQuery({
		queryKey: ["types-product"],
		queryFn: getProduit_type,
	});
}
export function useGetProduct() {
	return useQuery({
		queryKey: ["product"],
		queryFn: getProduit,
	});
}
export function useGetUnite() {
	return useQuery({
		queryKey: ["unite"],
		queryFn: getUnite,
	});
}
export function useCompanies(page = 1, size = 10, filter?: string) {
	return useQuery({
		queryKey: ["companies", page, size],
		queryFn: () => getCompanies(page, size, filter),
	});
}
export function UseGetProfil() {
  return useQuery({
    queryKey: ["profil"],
    queryFn: getProfil,
  });
}
export function UsegetAnomaly() {
  return useQuery({
    queryKey: ['anomaly'],
    queryFn:getAnomaly
  })
}