import { Table } from "flowbite-react";
import { useState } from "react";
import UserEditButton from "../user_edit_button";

interface UserTableRowProps {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

const UsersTableRow = ({ id,email,first_name,last_name,avatar } : UserTableRowProps) => {
    const [isEditing, setIsEditing] = useState(false);

    return(
        <Table.Row className="border-b">
            <UserEditButton id={id} />
            <Table.Cell>
                {id}
            </Table.Cell>
            <Table.Cell>
                <img
                src={avatar} 
                height={32} 
                width={32} 
                alt="User Avatar" 
                />
            </Table.Cell>
            <Table.Cell>
                {email}
            </Table.Cell>
            <Table.Cell>
                {first_name}
            </Table.Cell>
            <Table.Cell>
                {last_name}
            </Table.Cell>
        </Table.Row>
    )
}
export default UsersTableRow;