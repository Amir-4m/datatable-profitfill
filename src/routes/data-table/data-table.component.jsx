import {Fragment, useState} from "react";
import manLogo from '../../assets/0_0-removebg.png'
import {DataTableContainer, DataTableHeader, HeaderImage, ImageContainer, DataTableContent} from "./data-table.styles";
import Table from "../../components/table/table.component";
import data from '../../assets/data.json';
import PaginationControls from "../../components/pagination/pagination.component";
import MultiFilter from "../../components/multiselect/multiselect.component";


const DataTable = () => {
    const itemsPerPage = 10; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCities, setSelectedCities] = useState([]); // State for selected cities


    const groupedData = data.reduce((groups, item) => {
        const postalCodeFSA = item['Postal Code FSA'];
        if (!groups[postalCodeFSA]) {
            groups[postalCodeFSA] = {
                postalCodeFSA,
                city: item['Location City'],
                completedJobs: 0,
                completedRevenue: 0,
            };
        }
        groups[postalCodeFSA].completedJobs += item['Completed Jobs'];
        groups[postalCodeFSA].completedRevenue += parseFloat(item['Completed Revenue'].replace(/[^0-9.]/g, ''));
        return groups;
    }, {});

    // Calculate the average revenue per job for each group
    const tableData = Object.values(groupedData).map((group) => ({
        postalCodeFSA: group.postalCodeFSA,
        city: group.city,
        completedJobs: group.completedJobs,
        completedRevenue: group.completedRevenue.toFixed(2),
        averageRevenuePerJob: (group.completedRevenue / group.completedJobs).toFixed(2),
    }));
    const cities = [...new Set(tableData.map((item) => item['city']))];
    const filteredData = selectedCities.length === 0
        ? tableData
        : tableData.filter((item) => selectedCities.includes(item['city']));


    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };
    const handleCityChange = (selectedOptions) => {
        setSelectedCities(selectedOptions.map((option) => option.value));
    };
    return (
        <Fragment>
            <DataTableContainer>
                <DataTableHeader>
                    <h1>Geographic Revenue <span>Analytics</span></h1>
                    <p>Exploring Regional Trends and Insights</p>
                    <ImageContainer>
                        <HeaderImage src={manLogo}/>
                    </ImageContainer>
                </DataTableHeader>
                <DataTableContent>
                    <h1>Postal Code Performance Summary</h1>
                    <p>Explore the performance metrics for different postal codes and cities.</p>
                    <MultiFilter
                        options={cities}
                        selectedOptions={selectedCities}
                        onOptionChange={handleCityChange}
                        placeholder="Filter by city"
                    />
                    <Table data={filteredData} itemsPerPage={itemsPerPage} currentPage={currentPage}/>
                    <PaginationControls
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </DataTableContent>
            </DataTableContainer>
        </Fragment>
    );
}

export default DataTable;