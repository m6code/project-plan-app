export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Make async calls to db here

        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: "Benjamin",
            authorLastName: "SAO",
            authorId: 12345,
            createAt: new Date()
        }).then(() => {
            dispatch({
                type: "CREATE_PROJECT",
                project: project
            });
        }).catch((err) => {
            dispatch({ type: "CREATE_PROJECT_ERROR", err})
        })
    }
}