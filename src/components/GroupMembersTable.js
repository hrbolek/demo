import { GroupMemberTableRow } from "./GroupMemberTableRow"

/**
 * List of members as a table
 * @param {*} param0 
 * @returns 
 */
export const GroupMembersTable = ({group, actions}) => {
    //console.log(group.memberships)
    return (
        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Jméno</th>
                    <th>Příjmení</th>
                    <th>Email</th>
                    <th>Nástroje</th>
                </tr>
            </thead>
            <tbody>
                {group?.memberships?.map(
                    (u, index) => <GroupMemberTableRow key={u.id} user={u} index={index + 1} actions={actions} gid={group.id}/>
                )}
            </tbody>
        </table>
    )
}