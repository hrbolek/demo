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

    const state = getState()
    const groups = state.groups

    const group = groups.find(
        (g) => g.id === groupData.id
    )

    if (group) {
        dispatch(GroupActions.group_update(group))
    } else {
        dispatch(GroupActions.group_add(group))
    }

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
        
        if (group.type !== "") {
            await GroupFetchHelper(id, GroupQueryLarge, dispatch, getState)
        }
    }

    bodyfunc()
}