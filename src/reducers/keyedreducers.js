import { v1 as uuid1 } from 'uuid';

export const CreateItem = (state, action) => {
    const item = action.payload;
    const id = item['id'] || uuid1()
    if (!item['id']) {
        item['id'] = id
    }
    
    state[id] = item
    return state
}

export const UpdateItem = (state, action) => {
    const newItem = action.payload;
    const oldItem = state[newItem.id]
    state[newItem.id] = {...oldItem, ...newItem}
    
    return state
}

export const RemoveItem = (state, action) => {
    const item = action.payload;
    delete state[item.id]

    return state
}

export const ReplaceItem = (state, action) => {
    const newItem = action.payload;
    state[newItem.id] = newItem

    return state}