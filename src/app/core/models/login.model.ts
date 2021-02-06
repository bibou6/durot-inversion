export interface Login {
    username: string,
    password: string
}

export namespace Login{
    export const loginInit = (): Login => ({
        username: '',
        password: ''
    });
  }






  
