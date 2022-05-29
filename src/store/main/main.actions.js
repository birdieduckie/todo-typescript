export const GET_RECIPES_REQUEST = 'GET_RECIPES_REQUEST'
export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS'
export const GET_RECIPES_ERROR = 'GET_RECIPES_ERROR'

export const getRecipesRequest = isLoading => ({
  type: GET_RECIPES_REQUEST,
  isLoading
})

export const getRecipesSuccess = recipes => ({
  type: GET_RECIPES_SUCCESS,
  recipes
})

export const getRecipesError = error => ({
  type: GET_RECIPES_ERROR,
  error
})