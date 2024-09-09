import { getRefreshToken } from "utility/storage/auth";
import { axiosJsonServer } from "./axiosInstances";

export default {
  // login: (data: FormData) => axiosAnonInstance.get("/login"),
  //CAMBIAR
    getCountry: () =>
    axiosJsonServer.get("/country"),

    getCountryBorder: (countryCode) => 
    axiosJsonServer.get(`/checkBorderCountries${countryCode}`),
};