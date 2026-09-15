import request from "./request";

export type AlbumPhoto = {
    url: string;
}

export async function apiGetAlbumPhotos(params?: { current?: number; pageSize?: number }) {
    const current = params?.current ?? 1;
    const pageSize = params?.pageSize ?? 5;

    return await request.get<API.ListResult<AlbumPhoto>>("/album/photos", {
        params: {
            current,
            pageSize
        }
    });
}