const ADD_GUN = '加枪支';
const REMOVE_GUN = '减枪支';

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

export function addGun(){
	return {type: ADD_GUN}
}

export function removeGun(){
	return {type: REMOVE_GUN}
}