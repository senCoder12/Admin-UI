import React, { useState } from 'react';
import '../CSS/table.css';
import { BiSolidEdit } from "react-icons/bi";

const Table = ({ data, onEdit, onDelete }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (itemId) => {
        const updatedSelection = [...selectedItems];
        const index = updatedSelection.indexOf(itemId);

        if (index === -1) {
            updatedSelection.push(itemId);
        } else {
            updatedSelection.splice(index, 1);
        }

        setSelectedItems(updatedSelection);
    };

    const handleDeleteSelected = () => {
        onDelete(selectedItems);
        setSelectedItems([]);
    };

    return (
        <div>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" onChange={() => { }} checked={selectedItems.length === data.length} />
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckboxChange(item.id)}
                                    checked={selectedItems.includes(item.id)}
                                />
                            </td>
                            <td contentEditable={true} suppressContentEditableWarning={true}>
                                {item.name}
                            </td>
                            <td contentEditable={true} suppressContentEditableWarning={true}>
                                {item.email}
                            </td>
                            <td contentEditable={true} suppressContentEditableWarning={true}>
                                {item.role}
                            </td>
                            <td>
                                <div onClick={() => onEdit(item)}><BiSolidEdit />
</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedItems.length > 0 && (
                <div>
                    <button onClick={handleDeleteSelected}>Delete Selected</button>
                </div>
            )}
        </div>
    );
};

export default Table;
