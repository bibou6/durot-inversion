export interface InformationMap {
    id?: number,
    name: string,
    value: string
}

export namespace InformationMap{
  export const Init = (): InformationMap => ({
    name: '',
    value: ''
  });
}