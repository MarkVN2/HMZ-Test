import { Table } from "flowbite-react";

interface UserTableRowProps {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

const UsersTableRow = ({ id,email,first_name,last_name,avatar } : UserTableRowProps) => {
    return(
        <Table.Row className="border-b">
            <Table.Cell></Table.Cell>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{email}</Table.Cell>
            <Table.Cell>{first_name}</Table.Cell>
            <Table.Cell>{last_name}</Table.Cell>
            <Table.Cell>{avatar}</Table.Cell>
        </Table.Row>
    )
}
export default UsersTableRow;