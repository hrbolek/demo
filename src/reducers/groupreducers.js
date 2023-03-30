import { createSlice } from '@reduxjs/toolkit'

import { AddItem, DeleteItem, ReplaceItem, UpdateItem, PickItem } from './arrayreducers';

export const GroupSlice = createSlice({
    name: 'groups',
    initialState: [],
    reducers: {
        group_add: AddItem,
        group_delete: DeleteItem,
        group_replace: ReplaceItem,
        group_update: UpdateItem
    }
})

export const GroupActions = GroupSlice.actions
export const GroupReducer = GroupSlice.reducer