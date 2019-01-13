import React from "react";

const List = (props)=>
    <div className="col-md-4 name text-center">
        <div onClick={() => props.handlePageChange("Northeastern")}
             className={props.currentPage === "Northeastern" ? "active" : ""}>
              Northeastern University
        </div>
        <div onClick={() => props.handlePageChange("Ergo")}
             className={props.currentPage === "Ergo" ? "active" : ""}>
            Ergo Ventures
        </div>
        <div onClick={() => props.handlePageChange("Citycell")}
             className={props.currentPage === "Citycell" ? "active" : ""}>
            Citycell
        </div>
    </div>

export default List