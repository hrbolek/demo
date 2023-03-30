import { Trash } from 'react-bootstrap-icons';
import { TextInput } from 'components/TextInput';
import { DeleteButton } from 'components/DeleteButton';

export const GroupMemberRow = ({index, user, actions}) => {
    
    const onclick = () => {
        actions.onDeleteMember(user)
        console.log("clicked")
        console.log(user)
    }
    const onChangeEmail = (value) => {
        console.log("onChangeEmail")
        console.log(user, value)
    }

    return (
        <tr>
            <td>{index}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td><TextInput id={user.id} value={user.email} onChange={onChangeEmail}/></td>
            <td>
                <DeleteButton onClick={onclick}><Trash /></DeleteButton>
            </td>
        </tr>
    )
}

export const GroupMembersTable = ({group, actions}) => {
    console.log(group.memberships)
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
                    (u, index) => <GroupMemberRow key={u.id} user={u} index={index + 1} actions={actions}/>
                )}
            </tbody>
        </table>
    )
}