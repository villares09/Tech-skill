import { getRefreshToken } from "utility/storage/auth";
import { axiosJsonServer } from "./axiosInstances";

export default {
  // login: (data: FormData) => axiosAnonInstance.get("/login"),
  //CAMBIAR

    googleAuth: () => axiosJsonServer.get("/auth"),

    googleAuthCallback: () => axiosJsonServer.get(`/auth/callback`),

    isLoggedIn: () => axiosJsonServer.get(`/checklogin`),

    setTurn: (data: FormData) =>
    axiosJsonServer.post("/event", data),

    getEventCalendar: () => 
    axiosJsonServer.get("/events"),
    
    getPacientes: () => 
    axiosJsonServer.get("/pacientes"),

    getObrasSociales: () =>
    axiosJsonServer.get("/obrasocial"),

    getMail: () =>
    axiosJsonServer.get("/getEmail"),

    deleteEvento: (id: number) => 
    axiosJsonServer.delete(`/event/${id}`)
};


interface FormData {
  title: string,
  description: string, 
  startDateTime: Date, 
  endDateTime: Date, 
  name: string, 
  lastname: string, 
  email: string, 
  number: string, 
  obrasocial: string,
}