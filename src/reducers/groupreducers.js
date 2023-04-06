import { createSlice } from '@reduxjs/toolkit'

import { CreateItem, RemoveItem, ReplaceItem, UpdateItem } from './keyedreducers';

export const GroupSlice = createSlice({
    name: 'groups',
    initialState: [],
    reducers: {
        group_add: CreateItem,
        group_delete: RemoveItem,
        group_replace: ReplaceItem,
        group_update: UpdateItem
    }
})

export const GroupActions = GroupSlice.actions
export const GroupReducer = GroupSlice.reducer