import React from "react";

export const SalSlip=({basic})=>{
    return(
        <div className="sub">
            <table>
                <tr>
                    <td>Basic Salary</td>
                    <td>{basic}</td>
                </tr>
                <tr>
                    <td>D.A</td>
                    <td>{basic*0.05}</td>
                </tr>
                <tr>
                    <td>HRA</td>
                    <td>{basic*0.4}</td>
                </tr>
                <tr>
                    <td>CA</td>
                    <td>{basic*0.2}</td>
                </tr>
                <tr>
                    <td>Medical Allowance</td>
                    <td>{1500}</td>
                </tr>
                <tr>
                    <td>TA </td>
                    <td>{basic*0.05}</td>
                </tr>
                <tr>
                    <td>Total Salary</td>
                    <td><b>{basic+basic*0.05+basic*0.4+basic*0.2+1500+basic*0.05}</b></td>
                </tr>
            </table> 
        </div>
    );
}