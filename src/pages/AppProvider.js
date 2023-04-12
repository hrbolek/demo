import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { bindGroupActions } from 'reducers/_main';
import { GroupReducer } from 'reducers/groupreducers'; 

/**
 * Toto je hlavni store pro celou aplikaci. Zde zacleneno pro demonstraci. 
 */
export const store = configureStore(
    { 
        reducer: {
            groups: GroupReducer
        }, 
        preloadedState: {
            groups: {}
        }
})

const dispatch = store.dispatch

/**
 * Vsechny akce / callbacky pro celou aplikaci
 * Lze je kdekoliv importovat a vyuzit. 
 * Je ovsem zadouci, aby se tyto dostaly ke "spodnim" komponentam pres props.
 * Tim se zabezpeci jejich "purity" (nejsou zavisle na globalnich parametrech)
 */
export const actions = {
    ...bindGroupActions(dispatch)
}

/**
 * Zapouzdruje vnorene komponenty a umoznuje jim vyuzivat store - centralni data
 */
export const AppProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}