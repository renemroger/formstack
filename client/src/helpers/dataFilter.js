import React from "react";

export function constructDataArray(formData, submissionData) {
  const data = submissionData.map((submissionField, index) => {
    for (const formField of formData) {
      if (formField.id === submissionData[index].field) {
        return {
          rowName: [formField.label],
          rowValue: submissionData[index].value,
          rowId: [formField.id]
        };
      }
    }
    return undefined;
  });
  return data;
}

export function cleanHomeAddress(value) {
  const homeAddress = value.split("\n");
  const street = homeAddress[0].replace("address = ", "");
  const city = homeAddress[1].replace("city =", "");
  const state = homeAddress[2].replace("state =", ",");
  const zip = homeAddress[3].replace("zip =", "");
  return (
    <>
      <p>{street}</p>
      <p>
        {city}
        {state}
        {zip}
      </p>
    </>
  );
}

export function cleanNameOfDepedent(value) {
  const nameOfDependent = value.split("\n");
  const firstName = nameOfDependent[0].replace("first = ", " ");
  const lastName = nameOfDependent[1].replace("last = ", " ");
  return (
    <>
      {firstName}
      {lastName}
    </>
  );
}
