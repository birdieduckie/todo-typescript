import { GET_RECIPES_SUCCESS, GET_RECIPES_REQUEST } from './main.actions'

const initialState = {
  recipes: [],
  isLoading: false
}

const setRecipes = (state, action) => {
  return {
    ...state,
    recipes: action.recipes,
    isLoading: false
  }
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES_REQUEST:
      return {
        ...state, 
        isLoading: true
      }
    case GET_RECIPES_SUCCESS:
      return setRecipes(state, action)
    default: 
      return state
  }
}