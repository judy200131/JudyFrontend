//ACTIVITY 5

export interface Device {
    id?:number;
    name: string;
    brand: string;
    model: string;
    year: string;
    serial: string;
    
}

export interface Post {
    id:number;
    userId: number;
    title: string;
    body:string;
}