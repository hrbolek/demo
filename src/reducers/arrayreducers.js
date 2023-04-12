import { v1 as uuid1 } from 'uuid';

export const CreateItem = (state, action) => {
    const item = action.payload;

    const result = [...state, {id: uuid1(), ...item}]
    return result
}

export const DeleteItem = (state, action) => {
    const item = action.payload;

    const result = state.filter(i => i.id !== item.id)
    return result
}

export const ReplaceItem = (state, action) => {
    const item = action.payload;
    const id = item.id;
    const result = state.map(i => i.id === id ? {...item}: i)
    return result
}

export const UpdateItem = (state, action) => {
    const item = action.payload;
    const id = item.id;
    const result = state.map(i => i.id === id ? {...i, ...item}: i)
    return result
}

