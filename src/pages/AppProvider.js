import { Provider } from 'react-redux'

import { store, GroupActions } from 'reducers/_main';


const dispatch = store.dispatch
export const actions = {
    onGroupUpdate: (g) => dispatch(GroupActions.group_update(g)),
    onGroupAdd: (g) => dispatch(GroupActions.group_add(g)),
}

export const AppProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}