export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";

export default function reducer(state, action) {
  switch (action.type) {
    case SET_APPLICATION_DATA:
      return {
        ...state,
        submissionData: action.submissionData,
        formData: action.formData
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
