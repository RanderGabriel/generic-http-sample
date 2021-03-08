import { get } from "../http/http-client"

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

export const getComments = async (): Promise<Comment[]> => {
    return await get("/comments");
}

export const getComment = async (id: number): Promise<Comment> => {
    return get(`/comments/${id}`)
}