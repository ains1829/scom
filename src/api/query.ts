import { useQuery } from "@tanstack/react-query"
import { getEtudiants, getProduit_type} from "./api"

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