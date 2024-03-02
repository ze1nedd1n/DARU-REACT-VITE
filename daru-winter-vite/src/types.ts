export interface TodoTask {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
    url: string;
}


export interface UserData {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
}