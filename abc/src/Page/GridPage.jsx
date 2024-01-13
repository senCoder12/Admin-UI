import React, { useEffect, useState } from 'react';
import Pagination from '../Components/Pagination';
import Table from '../Components/Table';
import SearchBox from '../Components/SearchBox';

const GridPage = ({data}) => {

    const pageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [dataList, setDataList] = useState([]);

    // Filtering based on the search term
    const filteredData = data && data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentItems = filteredData.slice(startIndex, endIndex);

    useEffect(() => {
        setDataList(currentItems);
    }, [currentPage, searchTerm]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        setCurrentPage(1);
    };

    const handleEdit = (editedItem) => {
        const updatedData = data.slice(startIndex, endIndex).map((item) =>
            item.id === editedItem.id ? editedItem : item
        );
        setDataList(updatedData);
    };

    const handleDelete = (selectedItems) => {
        const updatedData = data.slice(startIndex, endIndex).filter((item) => !selectedItems.includes(item.id));
        setDataList(updatedData);
    };

    return (
        <div style={{ padding: '0 20px' }}>
            <h1>Admin UI</h1>
            <SearchBox onSearch={handleSearch} />
            <div style={{ margin: '20px 64px' }}>
                <Table data={dataList} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default GridPage;
