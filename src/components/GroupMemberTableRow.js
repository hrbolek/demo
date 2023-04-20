import { Trash } from 'react-bootstrap-icons';
import { TextInput } from 'components/TextInput';
import { DeleteButton } from 'components/DeleteButton';


import { GroupMemberRemoveButton } from './GroupMemberRemoveButton';
/**
 * One member as a table row
 * @param {*} param0 
 * @returns 
 */
export const GroupMemberTableRow = ({index, user, actions, gid}) => {
    
    //remove button action
    const onclick = () => {
        const payload = {group: {id: gid}, user: user}
        actions.onGroupMemberRemove(payload)
    }

    //change email callback
    const onChangeEmail = (value) => {
        if (actions.GroupMemberUpdate) {
            const payload = {group: {id: gid}, user: {...user, email: value}}
            actions.onGroupMemberUpdate(payload)
        }
    }

    
    const onChangeSurname = (value) => {
        //console.log("onChangeEmail")
        //console.log(user, value)
        if (actions.onGroupMemberUpdate) {
            const payload = {group: {id: gid}, user: {...user, surname: value}}
            actions.onGroupMemberUpdate(payload)
        }
    }

    const onChangeName = (value) => {
        //console.log("onChangeEmail")
        
        if (actions.onGroupMemberUpdate) {
            console.log(user, value)
            const payload = {group: {id: gid}, user: {...user, name: value}}
            actions.onGroupMemberUpdate(payload)
        }
    }
    return (
        <tr>
            <td>{index} {user.id}</td>
            <td>
                <TextInput placeholder={"jméno"} id={user.id} value={user.name} onChange={onChangeName}/>
            </td>
            <td>
                <TextInput placeholder={"příjmení"} id={user.id} value={user.surname} onChange={onChangeSurname}/>
            </td>
            <td>
                <TextInput placeholder={"email"} id={user.id} value={user.email} onChange={onChangeEmail}/>
            </td>
            <td>
                <DeleteButton onClick={onclick}><Trash /> Smaž</DeleteButton><br/>
                <GroupMemberRemoveButton group={{id: gid}} user={user} actions={actions} />
            </td>
        </tr>
    )
}