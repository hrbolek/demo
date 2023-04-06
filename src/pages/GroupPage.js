import { useState, useEffect } from 'react';
import { GroupMembersCard } from 'components/GroupMembersCard';
import { fakeQueryGroup } from 'queries/fakequerygroup';

export const GroupPage = ({id}) => {
    const [group, setGroup] = useState(null)
    
    useEffect(
        () => {
            fakeQueryGroup(id)
                .then(response => response.json())    
                .then((json) => setGroup(json))
        }, [id]
    )

    const onDeleteMember = (u) => {
        const filteredMembers = group.memberships.filter(
            (user) => user.id !== u.id
        )
        const newState = {...group, memberships: filteredMembers}
        setGroup(newState)
        console.log(filteredMembers)
    }

    const onEmailChange = (id, email) => {
        const updatedMembers = group.memberships.map(
            (user) => user.id !== id ? user : {...user, email: email}
        )
        const newState = {...group, memberships: updatedMembers}
        setGroup(newState)
        console.log(updatedMembers)
    }

    const onUserUpdate = (u) => {
        const updatedMembers = group.memberships.map(
            (user) => user.id !== u.id ? user : {...user, ...u}
        )
        const newState = {...group, memberships: updatedMembers}
        setGroup(newState)
        console.log(updatedMembers)
    }

    const actions = {
        onDeleteMember: onDeleteMember,
        onEmailChange: onEmailChange,
        onUserUpdate: onUserUpdate
    }

    if (group) {
        return (
            <GroupMembersCard group={group} actions={actions}/>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}