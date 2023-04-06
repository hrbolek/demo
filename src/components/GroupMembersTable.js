import { Trash } from 'react-bootstrap-icons';
import { TextInput, TextInput2 } from 'components/TextInput';
import { DeleteButton, DeleteButton2 } from 'components/DeleteButton';

export const GroupMemberRow = ({index, user, actions}) => {
    
    const onclick = () => {
        actions.onDeleteMember(user)
        console.log("clicked")
        console.log(user)
    }

    const onChangeEmail = (value) => {
        console.log("onChangeEmail")
        console.log(user, value)
        if (actions.onEmailChange) {
            actions.onEmailChange(user.id, value)
        }
    }
    const onChangeSurname = (value) => {
        //console.log("onChangeEmail")
        //console.log(user, value)
        if (actions.onUserUpdate) {
            actions.onUserUpdate({...user, surname: value})
        }
    }
    const onChangeName = (value) => {
        //console.log("onChangeEmail")
        //console.log(user, value)
        if (actions.onUserUpdate) {
            actions.onUserUpdate({...user, name: value})
        }
    }
    return (
        <tr>
            <td>{index}</td>
            <td>
                <TextInput2 placeholder={"jméno"} id={user.id} value={user.name} onChange={onChangeName}/>
            </td>
            <td>
                <TextInput2 placeholder={"příjmení"} id={user.id} value={user.surname} onChange={onChangeSurname}/>
            </td>
            <td><TextInput2 placeholder={"email"} id={user.id} value={user.email} onChange={onChangeEmail}/></td>
            <td>
                <DeleteButton2 onClick={onclick}><Trash /> Smaž</DeleteButton2>
                
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