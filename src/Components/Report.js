import React from "react";
import "../App.css";
const Report = ({ data }) => {
  console.log(data);
  return (
    <>
      <div>
        <table>
          <tr>
            <th>Investigation</th>
            <th>Result</th>
            <th>Ref_Value</th>
            <th>Unit</th>
          </tr>

          {data.map((val) => {
            return (
              <tr>
                <td>{val.Investigation}</td>
                <td>{val.Result}</td>
                <td>{val.Ref_Value}</td>
                <td>{val.Unit}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Report;
