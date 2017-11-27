const ADD_GUN = '加枪支';
const REMOVE_GUN = '减枪支';

// reducer
export function counter(state=0,action){
	switch(action.type){
		case ADD_GUN:
			return state + 1 ;
		case REMOVE_GUN:
			return state - 1 ;
		default:
			return state + 10; 
	}
}

// action creator
export function addGun(){
	return {type: ADD_GUN};
}

export function removeGun(){
	return {type: REMOVE_GUN};
}

export function  addGunAsync() {
	return dispatch => {
		setTimeout(() => {
			dispatch(addGun());
		},2000);
	}
}