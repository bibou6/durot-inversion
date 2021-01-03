export interface Test {
    id?: number,
    name: string,
    description: string,
    creationDate:  Date,
    updatedAt: Date
}

export namespace Test{
  export const testInit = (): Test => ({
    name: '',
    description: '',
    creationDate: new Date(),
    updatedAt: new Date()
  });
}





  
