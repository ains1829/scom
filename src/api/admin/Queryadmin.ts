import { useQuery } from "@tanstack/react-query";
import { getAdministration, getMissionnaire } from "./ApiAdmin";

export function useGetAdministration() {
  return useQuery(
    {
      queryKey: ['Adminstrator'],
      queryFn : getAdministration
    }
  )
}
export function useGetMissionnaire(page : number , region:number) {
  return useQuery(
    {
      queryKey: ['missionnaire' , page , region],
      queryFn : ()=> getMissionnaire(page , region),
    }
  )
}