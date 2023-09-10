import React from 'react';
import {TableContainer, TableHeader, TableCell} from './table.styles';

const Table = ({data, itemsPerPage, currentPage}) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the data to display only the items for the current page
    const displayedData = data.slice(startIndex, endIndex);
    // Calculate Average Revenue Per Job for each row


    // Render the table rows
    const tableRows = displayedData.map((row, index) => (
        <tr key={index}>
            <TableCell>{row.postalCodeFSA}</TableCell>
            <TableCell>{row.city}</TableCell>
            <TableCell>{row.completedJobs}</TableCell>
            <TableCell>{row.completedRevenue}</TableCell>
            <TableCell>${row.averageRevenuePerJob}</TableCell>
        </tr>
    ));
    return (
        <TableContainer>
            <thead>
            <tr>
                <TableHeader>Postal Code FSA</TableHeader>
                <TableHeader>City</TableHeader>
                <TableHeader>Completed # of Jobs</TableHeader>
                <TableHeader>Completed Revenue</TableHeader>
                <TableHeader>Average Revenue Per Job</TableHeader>
            </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </TableContainer>
    );
}

export default Table;