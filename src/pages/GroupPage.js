import { useState, useEffect } from 'react';
import { GroupMembersCard } from 'components/GroupMembersCard';
import { fakeQueryGroup } from 'queries/fakequerygroup';

export const GroupPage = ({id}) => {
    const [group, setGroup] = useState(null)
    
    useEffect(
        () => {
            fakeQueryGroup()
                .then(response => response.json())    
                .then((json) => setGroup(json))
        }
    )

    if (group) {
        return (
            <GroupMembersCard group={group} />
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}