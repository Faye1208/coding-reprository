const thunk = ({dispatch, getState}) => next => action => {
    console.log(action,typeof action);
    // 如果action参数是函数，就dispatch, getState当作参数来执行以下代码
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }

    // 默认情况下，什么都没做
    return next(action);

}

export default thunk;
