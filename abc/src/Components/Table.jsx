import React, { useState } from 'react';
import '../CSS/table.css';
import { BiSolidEdit } from "react-icons/bi";

const Table = ({ data, onEdit, onDelete }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [editableItemId, setEditableItemId] = useState(null);

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

    const handleCheckboxAllChange = () => {
        const allVisibleIds = data.map(item => item.id);
        const allSelected = selectedItems.length === allVisibleIds.length;

        if (allSelected) {
            setSelectedItems([]);
        } else {
            setSelectedItems(allVisibleIds);
        }
    };

    const handleEditClick = (itemId) => {
        setEditableItemId(itemId);
    };

    const handleSaveClick = () => {
        setEditableItemId(null);
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
                            <input type="checkbox" 
                                onChange={handleCheckboxAllChange} 
                                checked={selectedItems.length === data.length} />
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className={selectedItems.includes(item.id) ? 'selected-row' : ''}>
                            <td>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckboxChange(item.id)}
                                    checked={selectedItems.includes(item.id)}
                                />
                            </td>
                            <td>
                                {editableItemId === item.id ? (
                                    <input
                                        type="text"
                                        value={item.name}
                                        onChange={(e) => onEdit({ ...item, name: e.target.value })}
                                    />
                                ) : (
                                    item.name
                                )}
                            </td>
                            <td>
                                {editableItemId === item.id ? (
                                    <input
                                        type="text"
                                        value={item.email}
                                        onChange={(e) => onEdit({ ...item, email: e.target.value })}
                                    />
                                ) : (
                                    item.email
                                )}
                            </td>
                            <td>
                                {editableItemId === item.id ? (
                                    <input
                                        type="text"
                                        value={item.role}
                                        onChange={(e) => onEdit({ ...item, role: e.target.value })}
                                    />
                                ) : (
                                    item.role
                                )}
                            </td>
                            <td>
                                {editableItemId === item.id ? (
                                    <button onClick={handleSaveClick}>Save</button>
                                ) : (
                                    <div onClick={() => handleEditClick(item.id)}>
                                        <BiSolidEdit />
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedItems.length > 0 && (
                <div>
                    <button onClick={handleDeleteSelected} style={{background: "#f61f1f"}}>Delete Selected</button>
                </div>
            )}
        </div>
    );
};

export default Table;
