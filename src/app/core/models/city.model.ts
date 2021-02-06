import { InformationMap } from "./informationMap.model";
import { Media } from "./media.model";

export interface City {
    id?: number,
    name: string,
    description: string,
    creationDate:  Date,
    updatedAt: Date
    images: Media[],
    mainImage: Media,
    base64MainImage:string,
    informationMap: InformationMap[];
}

export namespace City{
  export const Init = (): City => ({
    name: '',
    description: '',
    creationDate: new Date(),
    updatedAt: null,
    images: [],
    mainImage: null,
    base64MainImage: '',
    informationMap: []
  });
}





  
