import { createReducer, createActions } from 'reduxsauce'
import { fromJS } from 'immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getUser: ['params', 'actionSuccess'],
  getUserSuccess: ['user'],
  getUserFailure: ['error'],
})

export const BarTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = fromJS({
  user: {},
  isGettingUser: false,
})

/* ------------- Reducers ------------- */

const getUser = (state) =>
  state.merge({
    isGettingUser: true,
  })
const getUserSuccess = (state, { user }) =>
  state.merge({
    isGettingUser: false,
    user,
  })
const getUserFailure = (state, { error }) =>
  state.merge({
    isGettingUser: false,
    error,
  })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_USER]: getUser,
  [Types.GET_USER_SUCCESS]: getUserSuccess,
  [Types.GET_USER_FAILURE]: getUserFailure,
})
