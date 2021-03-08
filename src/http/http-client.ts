import axios from "axios";
import { baseUrl } from "./config";

const instance = axios.create({ baseURL: baseUrl });

export const setAuthorization = (token: string) => {
    instance.defaults.headers["Authorization"] = token;
}

const parseDefault = <T>(raw: any, parser?: (raw?: any) => T): T => {
    return parser ? parser(raw) : raw;
}

export const post = async <T>(path: string, body: any, parser?: (raw?: any) => T): Promise<T> => {
    const response = await instance.post(path, body)
    return parseDefault(response.data, parser);
}

export const put = async <T>(path: string, body: any, parser?: (raw: any) => T): Promise<T> => {
    const response = await instance.put(path, body)
    return parseDefault(response.data, parser); 
}

export const get =  async <T>(path: string, parser?: (raw: any) => T): Promise<T> => {
    const response = await instance.get(path)
    return parseDefault(response.data, parser);
}
