import { useQuery } from "@tanstack/react-query"
import {getCompanies, getEtudiants, getProduit, getProduit_type, getUnite} from "./api"
export function useEtudiants(){
  return useQuery(
    {
      queryKey: ['etudiants'],
      queryFn :getEtudiants,
    }
  )
}export function useTypeProduct(){
  return useQuery(
    {
      queryKey: ['types-product'],
      queryFn :getProduit_type,
    }
  )
}
export function usegetProduct() {
  return useQuery(
    {
      queryKey: ['product'],
      queryFn : getProduit,
    }
  )
}
export function usegetUnite() {
  return useQuery(
    {
      queryKey: ['unite'],
      queryFn : getUnite,
    }
  )
}
