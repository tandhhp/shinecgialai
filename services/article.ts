import { EditorJSType } from "@/typings/editorjs";
import request from "./request";

export type ArticleListItem = {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    createdAt: string;
    viewCount: number;
    name: string;
    normalizedName: string;
    modifiedDate: string;
    createdDate: string;
}

export type ArticleDetail = ArticleListItem & {
    content: EditorJSType;
}

export type ArticleMeta = {
    title: string;
    description?: string;
    images: string[];
}

export async function apiArticleList(params: API.FilterOptions) {
    return request.get<API.ListResult<ArticleListItem>>("article/published-list", { params });
}

export async function apiArticleDetail(normalizedName: string) {
    return request.get<API.TResult<ArticleDetail>>(`article/${normalizedName}`);
}

export async function apiArticleRandoms() {
    return request.get<API.ListResult<ArticleDetail>>("article/randoms");
}

export async function apiArticleMeta(normalizedName: string) {
    return request.get<API.TResult<ArticleMeta>>(`article/meta/${normalizedName}`);
}