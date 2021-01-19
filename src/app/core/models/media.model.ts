export interface Media {
    id?: number,
    imageName: string,
    url: string
}

export namespace Media{
  export const Init = (): Media => ({
    imageName: '',
    url: ''
  });
}