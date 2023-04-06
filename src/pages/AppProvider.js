import { Provider } from 'react-redux'

import { store, GroupActions } from 'reducers/_main';
import { GroupFetch, GroupUpdate } from 'reducers/GroupFetch';

const dispatch = store.dispatch
export const actions = {
    onGroupUpdate: (g) => dispatch(GroupActions.group_update(g)),
    onGroupAdd: (g) => dispatch(GroupActions.group_add(g)),
    GroupLoad: (id) => dispatch(GroupFetch(id)),
    GroupUpdate: (g) => dispatch(GroupUpdate(g))
}

export const AppProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}