
export const createProject = (project) => {
    return (dispatch, getState) => {
        // Make async calls to db here
        dispatch({
            type: "CREATE_PROJECT",
            project: project
        });
    }
}