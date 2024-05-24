
interface TableRowProps {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

const TableRow = ({ id,email,first_name,last_name,avatar } : TableRowProps) => {
    return(
        <tr>
            <td>{id}</td>
            <td>{email}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{avatar}</td>
        </tr>
    )
}