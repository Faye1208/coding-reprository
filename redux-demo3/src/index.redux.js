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
// 同步,返回对象
export function addGun(){
	return {type: ADD_GUN};
}
// 同步,返回对象
export function removeGun(){
	return {type: REMOVE_GUN};
}
// 异步,返回一个函数
export function  addGunAsync() {
	return dispatch => {
		setTimeout(() => {
			dispatch(addGun());
		},2000);
	}
}