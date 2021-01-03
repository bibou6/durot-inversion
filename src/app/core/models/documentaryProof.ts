export interface DocumentaryProof {
    id?: number,
    name: string,
    startValidityDate: Date,
    endValidityDate: Date,
}
 
export namespace DocumentaryProof{
  export const init = (): DocumentaryProof => ({
    name: '',
    startValidityDate: null,
    endValidityDate: null
  });
}





  
