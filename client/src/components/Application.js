import React from "react";
import "components/Application.css";
import FormDisplay from "components/FormDisplay";

import useApplicationData from "hooks/useApplicationData";

export default function Application(props) {
  const { state } = useApplicationData();

  return (
    <main className="layout">
      {Object.entries(state.formData).length !== 0 &&
        state.formData.constructor === Object && (
          <FormDisplay
            formData={state.formData}
            submissionData={state.submissionData}
          />
        )}
    </main>
  );
}
