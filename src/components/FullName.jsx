import React from "react";

export const FullName=({fname,lname,empid,department})=>{
    return(
        <div className="sub">
            <h3>
                {`${fname} ${lname}`}
            </h3>
            <h4>
                {empid}
            </h4>
            <h5>
                {department}
            </h5>
        </div>
    );
}