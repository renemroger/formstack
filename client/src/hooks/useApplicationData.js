import { useReducer, useEffect } from "react";

import axios from "axios";

import reducer, { SET_APPLICATION_DATA } from "reducers/application";

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    submissionData: {},
    formData: {}
  });

  useEffect(() => {
    const submissionApi = "/api/submission";
    const formApi = "/api/form";

    Promise.all([axios.get(submissionApi), axios.get(formApi)])
      .then(([{ data: submissionData }, { data: formData }]) =>
        dispatch({
          type: SET_APPLICATION_DATA,
          submissionData,
          formData
        })
      )
      .catch(error => {
        console.log(error);
      });
  }, []);
  return {
    state
  };
}
