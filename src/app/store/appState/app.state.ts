
export interface AppState {
    main    : boolean,
    footer  : boolean,
    filter  : string,
    error   : any,
    loading : boolean,
    allCompleted : boolean,
}

export const initialState: AppState = {
    main   : false,
    footer : false,
    filter : 'all',
    error  : null,
    loading: false,
    allCompleted : false,
  };
