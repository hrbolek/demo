

export const GroupMemberRow = ({user}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
            <td></td>
        </tr>
    )
}

export const GroupMembersTable = ({group}) => {
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
                {group?.memberships.map(
                    (u) => <GroupMemberRow key={u.id} user={u} />
                )}
            </tbody>
        </table>
    )
}