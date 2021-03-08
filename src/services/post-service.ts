import { get } from "../http/http-client"

export interface Post {
    id: number;
    title: string;
    body: string;
};

export const getPosts = async (): Promise<Post[]> => {
    return await get("/posts");
}

export const getPost = async (id: number): Promise<Post> => {
    return get(`/posts/${id}`)
}