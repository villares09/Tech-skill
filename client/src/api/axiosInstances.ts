import axios, { AxiosInstance } from "axios";

let store;

export const injectStore = (_store) => {
  store = _store;
};

// ------------------- //
// Annonymous Instance //
// ------------------- //

const getAnonInstance = (baseUrl: string) => {
  const anonInstance = axios.create({
    baseURL: baseUrl,
    // headers: new Headers({
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //       'Access-Control-Allow-Origin': '*',
    //       "accept":"*/*"
    //     }),
    headers: {
      common: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": ["https://danielaalonsoturnos.onrender.com", "https://danielaalonsoturnos.onrender.com/auth", "https://danielaalonsoturnos.onrender.com/auth/callback"],
        accept: "*/*",
      } as any,
    },
  });

  anonInstance.interceptors.response.use(
    (response: any) => {
      return response;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );

  anonInstance.interceptors.request.use(async (config: any) => {
    return config;
  });

  return anonInstance;
};

// ---------------------- //
// Authenticated Instance //
// ---------------------- //

export const getAuthInstance = (baseUrl: string) => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
      common: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        accept: '*/*',
      },
    },
  });
  axiosInstance.interceptors.response.use(
    (response: any) => {
      // console.log("getAuthInstance OK");
      // logStep("request result: " + JSON.stringify(response.data));
      // ** Get token from localStorage
      // const accessToken = getToken();

      // // console.log("accessToken", accessToken);
      // // ** If token is present add it to request's Authorization Header
      // if (accessToken) {
      //   // ** eslint-disable-next-line no-param-reassign
      //   response.headers.Authorization = `${process.env.REACT_APP_TOKEN_TYPE} ${accessToken}`;
      // }
      return response;
    },
    (error: any) => {
      console.log("error", error);
      const { config, response } = error;
      // Any status codes that falls outside the range of 2xx cause function to trigger
      // Do something with response error
      // handleErrorLogger("request error: " + JSON.stringify(error.response));
      return Promise.reject(error);
    }
  );
  // return axiosInstance;
  // axiosInstance.interceptors.request.use(async (config: any) => {
  //   const accessToken = getToken();

  //   // console.log(accessToken,"token");
  //   config.withCredentials=false;
    
  //   if (accessToken)
  //     config.headers.Authorization = `${process.env.REACT_APP_TOKEN_TYPE} ${accessToken}`;
  //   return config;
  // });

  return axiosInstance;
};

export const ejectInterceptor = (
  instance: AxiosInstance,
  interceptor: number
) => {
  instance.interceptors.request.eject(interceptor);
};


export const axiosJsonServer = getAuthInstance(
  process.env.REACT_APP_POST_COUNTRY!
); //TODO, mirar como conectarlo con el env