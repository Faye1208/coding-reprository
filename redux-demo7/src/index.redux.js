const ADD_GUN = '加枪支';
const REMOVE_GUN = '减枪支';

export function counter (state = 0, action) {
    switch (action.type) {
        case ADD_GUN:
            return state + 1;
        case REMOVE_GUN:
            return state - 1;
        default:
            return 10;
    }
}

export function addGun () {
    console.log('add');
    return {type: ADD_GUN};
}

export function removeGun () {
    console.log('remove');
    return {type: REMOVE_GUN};
}