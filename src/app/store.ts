import { tassign } from 'tassign';

import { INCREMENT } from './actions';

// Determines the state and properties of our store
export interface IAppState {
    counter: number;
    messaging?: {
        newMsgs: number;
    }
}

export const INITIAL_STATE: IAppState = {
    counter: 0,
    messaging: {
        newMsgs: 6
    }
}

export function rootReducer(state: IAppState, action): IAppState {
    switch(action.type){
        case INCREMENT:
                //return {counter: state.counter + 1};
                // This method is NOT recommended as it gives way for mutation - we can add any variable
                //      which are not in IAppState also
                //return Object.assign({}, state, {couter: state.counter + 1});
                return tassign(state, {counter: state.counter + 1});
    }
    return state;
}