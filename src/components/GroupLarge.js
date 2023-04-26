import Card from "react-bootstrap/Card";

import { GroupMembersCard } from './GroupMembersCard';
import { GroupSubgroupsCard } from "./GroupSubgroupsCard";
import { GroupNameInput } from "./GroupNameInput";

/**
 * Renders a card describing a group im detailed form.
 * @param {*} param0 
 * @returns 
 */
export const GroupLarge = ({group, actions}) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    Skupina {group.id} <br />
                    {group.name} <br />
                    <GroupNameInput group={group} actions={actions} />
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <GroupMembersCard group={group} actions={actions} />
                <GroupSubgroupsCard group={group} actions={actions} />
            </Card.Body>
            <Card.Body>
                {JSON.stringify(group)}
            </Card.Body>
        </Card>
    )
}