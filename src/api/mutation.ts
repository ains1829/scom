import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Authentification, ChangePassword, CreateTypeproduct, Createnomaly, Createproduct, GenerateCoderecuperation } from "./api";
import { AuthUser } from "./json/requestbody/AuthUser";
import { Lostpassword } from "./json/requestbody/Lostpassword";
import { Typejsonproduct } from "./json/requestbody/product/Typejsonproduct";

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
export function useCreateanomaly() {
  const query = useQueryClient();
  return useMutation({
    mutationFn: (nameanomaly: string) => Createnomaly(nameanomaly),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error)
      } else {
        await query.invalidateQueries({queryKey:['anomaly']})
      }
    }
  })
}