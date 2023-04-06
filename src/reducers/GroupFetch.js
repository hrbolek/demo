import { GroupActions } from "./groupreducers" 
import { GroupQuerySmall } from "queries/GroupQuerySmall"
import { GroupQueryLarge } from "queries/GroupQueryLarge"

/**
 * Ask for the group on server and adds it or update it in the store
 * @param {*} id 
 * @returns group
 */
const GroupFetchHelper = async (id, query, dispatch, getState) => {
    const response = await query(id)
    const jsonData = await response.json()
    const groupData = jsonData.GroupById

    dispatch(GroupActions.group_update(groupData))

    return groupData
}

/**
 * Fetch the group from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id 
 * @returns 
 */
export const GroupFetch = (id) => (dispatch, getState) => {
    const bodyfunc = async () => {
        const groupData = await GroupFetchHelper(id, GroupQuerySmall, dispatch, getState)
        
        if (group.type !== "cd49e152-610c-11ed-9f29-001a7dda7110") {
            await GroupFetchHelper(id, GroupQueryLarge, dispatch, getState)
        }
    }
    return bodyfunc()
}

export const GroupUpdate = (group) => (dispatch, getState) => {
    const bodyfunc = async () => {}
    return bodyfunc()
}