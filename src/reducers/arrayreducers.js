

export const AddItem = (state, action) => {
    const item = action.payload;

    const result = [...state, item]
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

// export const PickItem = (state, action) => {
//     const item = action.payload;
//     const id = item.id;
//     const resultA = state.map(i => i?.__selected ? {...i, __selected: false}: i)
//     const result = resultA.map(i => i.id === id ? {...i, __selected: true}: i)
//     return result
// }

// export const FindTheItem = (state) => state.find(i => i.__selected)