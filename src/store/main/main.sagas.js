import { call, put, takeLatest } from 'redux-saga/effects'

import { API } from '../../core/api'

import { GET_RECIPES_REQUEST, getRecipesSuccess, getRecipesError } from './main.actions'

function* getRecipes() {
  try {
    const response = yield call(API.get, '/facts')
    console.log(response)
    yield put(getRecipesSuccess(response.data))
  } catch (error) {
    yield put(getRecipesError(error))
    console.error(error)
  }
}

export function* watchGetRecipes() {
  yield takeLatest(GET_RECIPES_REQUEST, getRecipes)
}