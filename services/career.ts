import { EditorJSBlock } from "@/typings/editorjs";
import request from "./request";

type CareerFilterOptions = API.FilterOptions;

export type CareerJobType = 0 | 1 | 2 | 3 | number;
export type CareerJobStatus = 0 | 1 | 2 | 3 | number;

export interface CareerDetailBlock {
    id?: string;
    type: string;
    data: {
        text?: string;
        level?: number;
        style?: "ordered" | "unordered";
        items?: { content: string; items?: { content: string }[] }[];
        file?: { url?: string };
        caption?: string;
        code?: string;
    };
}

export interface CareerEditorContent {
    time?: number;
    version?: string;
    blocks?: EditorJSBlock[];
}

export interface CareerListItem {
    id: string;
    normalizedName: string;
    title: string;
    description?: string;
    jobRequirements?: string;
    salaryRange?: string;
    jobLocation?: string;
    jobType: CareerJobType;
    status: CareerJobStatus;
    viewCount: number;
    applicationCount: number;
    createdDate: string;
    modifiedDate?: string;
    createdBy: string;
    modifiedBy?: string;
}

export interface CareerDetailItem {
    id: string;
    title: string;
    description?: string;
    detail?: CareerEditorContent | null;
    detailJson?: CareerEditorContent | null;
    jobType: CareerJobType;
    status: CareerJobStatus;
}

export async function apiCareerList(params: CareerFilterOptions) {
    return request.get<API.ListResult<CareerListItem>>("career/list-published-opportunity");
}

export async function apiCareerDetail(normalizedName: string) {
    return request.get<API.TResult<CareerDetailItem>>(`career/opportunity/${normalizedName}`);
}