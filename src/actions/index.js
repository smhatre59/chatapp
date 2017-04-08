/**
 * @file actionsindex
 * All dispatch actions defined here
 */ 
import * as types from './actionTypes'

export const postMessage = (message,avatar) => ({type: types.POST_MESSAGES,message,avatar})