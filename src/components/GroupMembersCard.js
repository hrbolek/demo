
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GroupMembersTable } from './GroupMembersTable';

/**
 * Renders a card containing a list of group members.
 */
export const GroupMembersCard = ({group, actions}) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    Členové
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <GroupMembersTable group={group} actions={actions}/>
            </Card.Body>
        </Card>
    )
}