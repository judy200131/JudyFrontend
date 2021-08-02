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

export interface User {
    id:number;
    name: string;
    userName: string;
    email: string;
    address: {
        street : string;
        suite : string;
        city : string;
        zipcode : number;
        geo : {
            lat: number;
            lng: number;
        }
    }
    phone: number;
    website: string;
    company: {
        name:string;
        catchPhrase:string;
        bs:string;
    }

}