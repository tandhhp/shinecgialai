import axios, { AxiosInstance } from "axios";

const resolvedApiHost = process.env.NEXT_PUBLIC_API_URL;
const API_URL = resolvedApiHost ? `${resolvedApiHost.replace(/\/+$/, "")}/api/` : undefined;

function createServerRequest(): AxiosInstance {
    const instance = axios.create();

    instance.interceptors.request.use((config) => {
        if (API_URL) {
            config.baseURL = API_URL;
        }

        return config;
    });

    instance.interceptors.response.use((response) => response);

    return instance;
}

const request = createServerRequest();


export default request;