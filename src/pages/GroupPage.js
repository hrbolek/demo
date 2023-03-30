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

    const actions = {
        onDeleteMember: onDeleteMember
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