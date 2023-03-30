import { configureStore } from '@reduxjs/toolkit'

//import { data } from './data';

import { GroupReducer } from './groupreducers'

export const store = configureStore(
    { 
        reducer: {
            groups: GroupReducer
        }, 
        preloadedState: {
            groups: []
        }
})

export { GroupActions } from './groupreducers';