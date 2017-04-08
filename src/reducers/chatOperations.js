/**
 * @file questionsOperations
 * File to update store state based on called actions 
 */
import { POST_MESSAGES } from '../actions/actionTypes'

const initialState = [{
    message: 'How do I use this messaging app?',
    from: 'right',
    backColor: '#3d83fa',
    textColor: "white",
    avatar: 'http://res.cloudinary.com/technoetics/image/upload/v1491538348/technoetics/profilepenguin.png',
    duration: 2000,
    inbound: true
}];

export default function chatOperations(state = initialState, action) {
    switch (action.type) {
        case POST_MESSAGES:
            return [
                ...state,
                {
                    message: action.message,
                    from: 'right',
                    backColor: "green",
                    textColor: "white",
                    avatar: action.avatar,
                    duration: 2000,
                    inbound: false
                }
            ]
        default:
            return state
    }
}