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
        case INCREMENT:return {counter: state.counter + 1};
    }
    return state;
}