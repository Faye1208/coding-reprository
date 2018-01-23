const arrayThunk = ({dispatch, getState}) => next => action => {
    console.log(action,typeof action);

    if (Array.isArray(action)) {
        console.log('array');
        return action.forEach(v => dispatch(v));
    }

    // 默认情况下，什么都没做
    return next(action);

}

export default arrayThunk;