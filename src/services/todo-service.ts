import { get } from "../http/http-client"

export type Todo = any;

export const getTodos = async (): Promise<Todo[]> => {
    return await get("/todos");
}

export const getTodo = async (id: number): Promise<Todo> => {
    return get(`/todos/${id}`)
}