import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Etudiant } from "../types/Etudiant";
import { Authentification, ChangePassword, CreateTypeproduct, Createproduct, DeleteEtudiant, GenerateCoderecuperation, SaveEtudiants, UpdateEtudiants } from "./api";
import { AuthUser } from "./json/requestbody/AuthUser";
import { Lostpassword } from "./json/requestbody/Lostpassword";
import { Typejsonproduct } from "./json/requestbody/product/Typejsonproduct";

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
// scom project
export function useAuthuser() {
  return useMutation({
    mutationFn: (data: AuthUser) => Authentification(data),
    onSuccess() {
    },
    onError(error) {
      console.log("network error : " + error)
    }
  })
}
export function useGenerateCode() {
  return useMutation({
    mutationFn: (email: string) => GenerateCoderecuperation(email),
    onSuccess() {
    },
    onError(error) {
      console.log("network error : " + error)
    }
  })
}
export function useResetPassword() {
  return useMutation({
    mutationFn: (data: Lostpassword) => ChangePassword(data),
    onSuccess() {
    },
    onError(error) {
      console.log("network error : " + error)
    }
  })
}
export function useCreateTypeproduct() {
  const query = useQueryClient();
  return useMutation({
    mutationFn: (data: Typejsonproduct) => CreateTypeproduct(data),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error)
      } else {
        await query.invalidateQueries({queryKey:['types-product']})
      }
    }
  })
}
export function useCreateproduct() {
  const query = useQueryClient();
  return useMutation({
    mutationFn: (data: Typejsonproduct) => Createproduct(data),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error)
      } else {
        await query.invalidateQueries({queryKey:['product']})
      }
    }
  })
}