
const initState = {
    projects: [
        { id: '1', title: 'Help me find peach', content: 'finding peach will make me happier again' },
        { id: '2', title: 'Collect all the stars', content: 'collecting the starts and finding peach will make me happier again' },
        { id: '3', title: 'Egg hunt with yoshi', content: 'Egg hunting with yoshi, collecting the starts and finding peach will make me happier again' },
    ]
}


const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;