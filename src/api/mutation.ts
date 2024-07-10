import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Etudiant } from "../types/Etudiant";
import { DeleteEtudiant, SaveEtudiants, UpdateEtudiants } from "./api";

export function useCreateEtudiants() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Etudiant) => SaveEtudiants(data),
    onSettled: async (_ , error) => {
      console.log('settled');
      if (error) {
        console.log(error)
      } else {
        await queryClient.invalidateQueries({queryKey : ["etudiants"]})
      }
    }
  } 
  )
}
export function useUpdateEtudiants() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Etudiant) => UpdateEtudiants(data),
    onSettled: async (_, error) => {
      if (error) {
        console.log('error')
      } else {
        await queryClient.invalidateQueries({ queryKey : ["etudiants"]})
      }
    }
  })
}
export function useDeleteEtudiant() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => DeleteEtudiant(id),
    onSettled: async (_, error) => {
      if (error) {
        console.log('error')
      } else {
        await queryClient.invalidateQueries({ queryKey : ["etudiants"]})
      }
    }
  })
}