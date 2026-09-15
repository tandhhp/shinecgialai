declare namespace API {
    interface TResult<T> {
        data?: T;
        message?: string;
        succeed: boolean;
    }
    interface ListResult<T> {
        data: T[];
        total: number;
    }
    interface FilterOptions {
        current: number;
        pageSize: number;
    }
}