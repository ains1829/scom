import { useQuery } from "@tanstack/react-query"
import { getEtudiants} from "./api"

export function useEtudiants(){
  return useQuery(
    {
      queryKey: ['etudiants'],
      queryFn :getEtudiants,
    }
  )
}