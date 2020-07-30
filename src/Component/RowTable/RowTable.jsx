import React from 'react';
import './RowTable.scss';

export default function RowTable({ item }) {
    return (
        <tbody className="row-table">
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <button onclick="delete_contact(1)" class="btn btn-danger"> <i class="fa fa-trash"></i></button>
                <button onclick="edit(1)" class="btn btn-primary"> <i class="fa fa-edit"></i></button>
            </tr>
        </tbody>
    )
}
