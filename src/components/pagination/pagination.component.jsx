import React from 'react';
import { PaginationContainer, PaginationButton } from './pagination.styles';

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <PaginationContainer>
      <PaginationButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </PaginationButton>
      <span>Page {currentPage} of {totalPages}</span>
      <PaginationButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </PaginationButton>
    </PaginationContainer>
  );
}
export default PaginationControls;