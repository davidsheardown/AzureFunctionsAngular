import { ModuleWithProviders } from '@angular/core';


export interface IPerson {
    id: string,
    createdAt: string,
    name: string,
    age: number,
    occupation: string,
    isActive: boolean
}


export interface IApiResult {
    success: boolean,
    errorMessage: string,
    generatedAt: string,
    entities: IPerson[]
}
