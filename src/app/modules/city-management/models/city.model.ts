import { InformationMap } from "./informationMap.model";
import { Media } from "../../../core/models/media.model";
import { NgModuleResolver } from "@angular/compiler";

export interface City {
    id?: number,
    name: string,
    region: string,
    department:number,
    ranking: number,
    population:number,
    description: string,
    creationDate:  Date,
    updatedAt: Date
    images: Media[],
    mainImage: Media,
    base64MainImage:string,
    informationMap: InformationMap[],

	//Real Estate Info
	rentPriceShortBySquareMeters : number,
	rentPriceWoFournitureLongBySquareMeters : number,
	rentPriceWithFournitureLongBySquareMeters : number,
	buyingPriceBySquareMeters : number,
	rentalRequestLong : RentalRequestValue;
	
}

export namespace City{
  export const Init = (): City => ({
    name: '',
    region: '',
    department: null,
    ranking: null,
    description: '',
    population: null,
    creationDate: null,
    updatedAt: null,
    images: [],
    mainImage: null,
    base64MainImage: '',
    informationMap: [],
	buyingPriceBySquareMeters: null,
	rentPriceShortBySquareMeters: null,
	rentPriceWithFournitureLongBySquareMeters: null,
	rentPriceWoFournitureLongBySquareMeters: null,
	rentalRequestLong: null
  });
}

export enum RentalRequestValue {
	VERY_STRONG,
	STRONG,
	NORMAL,
	AVERAGE,
	WEAK
}





  
