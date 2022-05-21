
export interface AppState {
    main   : boolean,
    footer : boolean,
    filter : string,
    allCompleted : boolean,
}

export const initialState: AppState = {
    main   : false,
    footer : false,
    filter : 'all',
    allCompleted : false,
  };
