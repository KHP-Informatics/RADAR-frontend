import * as compliance from './compliance.actions'

export interface State {
  data: any
  isLoaded: boolean
}

const initialState: State = {
  data: [],
  isLoaded: false
}

export function reducer(
  state = initialState,
  action: compliance.Actions
): State {
  switch (action.type) {
    case compliance.GET_ALL: {
      return {
        ...state,
        isLoaded: false
      }
    }

    case compliance.GET_ALL_SUCCESS: {
      return {
        isLoaded: true,
        data: action.payload
      }
    }

    default:
      return state
  }
}

export const getIsLoaded = (state: State) => state.isLoaded
export const getData = (state: State) => state.data
