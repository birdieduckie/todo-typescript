import { all } from 'redux-saga/effects'

import { watchGetRecipes as watchGetRecipesSaga } from './main/main.sagas'

export function* rootSaga() {
  yield all([watchGetRecipesSaga()])
}