import React from "react";
import "components/FormDisplay.css";

import {
  constructDataArray,
  cleanNameOfDepedent,
  cleanHomeAddress
} from "helpers/dataFilter";

export default function FormDisplay(props) {
  const formData = props.formData.fields;
  const submissionData = props.submissionData.data;

  const tableRows = constructDataArray(formData, submissionData).map(
    (row, i) => {
      const rowName = row.rowName;
      let rowValue = row.rowValue;

      if (rowName[0] === "Home Address") {
        rowValue = cleanHomeAddress(rowValue);
      }

      if (rowName[0] === "Name of Dependent") {
        rowValue = cleanNameOfDepedent(rowValue);
      }
      return (
        <tr key={row.rowId}>
          <th className="header">{rowName}</th>
          <td className="value">{rowValue}</td>
        </tr>
      );
    }
  );

  return (
    <table className="tableMain">
      <tbody>
        <tr>
          <td></td>
          <th className="formName">{formData[0].section_heading}</th>
        </tr>
        {tableRows}
      </tbody>
    </table>
  );
}
