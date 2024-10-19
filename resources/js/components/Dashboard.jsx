import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Charts from "./Charts";
import Pagination from "./Pagination";

function Dashboard() {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [totalItems, setTotalItems] = useState(0);    
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        start_year: "",
        end_year: "",
        topics: "",
        sector: "",
        region: "",
        pestle: "",
        source: "",
        swot: "",
        country: "",
        city: "",
        // Add other filters here
    });

    useEffect(() => {
        fetchData(currentPage);
    }, [filters, currentPage]);

    const fetchData = (page) => {
        axios
            .get("/api/data", { params: { ...filters, page } })
            .then((response) => {
                setData(response.data.data);
                setTotalPages(response.data.last_page);
                setTotalItems(response.data.total); 
            })
            .catch((error) => console.error(error));
    };

    // Update filters when form fields change
    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className="container my-5">
            <div className="my-5">
                <h2 className="mb-3">Filter Data Points</h2>
                <div className="row g-3">
                    <div className="col-sm-2">
                        <input
                            name="start_year"
                            onChange={handleFilterChange}
                            placeholder="Start Year"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-2">
                        <input
                            name="end_year"
                            onChange={handleFilterChange}
                            placeholder="End Year"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-2">
                        <input
                            name="topics"
                            onChange={handleFilterChange}
                            placeholder="Topics"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-2">
                        <input
                            name="sector"
                            onChange={handleFilterChange}
                            placeholder="Sector"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-2">
                        <input
                            name="region"
                            onChange={handleFilterChange}
                            placeholder="Region"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-2">
                        <input
                            name="pestle"
                            onChange={handleFilterChange}
                            placeholder="PESTLE"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-2">
                        <input
                            name="source"
                            onChange={handleFilterChange}
                            placeholder="Source"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-2">
                        <input
                            name="swot"
                            onChange={handleFilterChange}
                            placeholder="SWOT"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-2">
                        <input
                            name="country"
                            onChange={handleFilterChange}
                            placeholder="Country"
                            className="form-control"
                        />
                    </div>
                    <div className="col-sm-2">
                        <input
                            name="city"
                            onChange={handleFilterChange}
                            placeholder="City"
                            className="form-control"
                        />
                    </div>
                </div>
            </div>

            <Charts data={data} />

            {totalPages == undefined ? 
            ''
                :
                <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                totalItems={totalItems} 
                onPageChange={handlePageChange} />
            }
            
        </div>
    );
}

export default Dashboard;
