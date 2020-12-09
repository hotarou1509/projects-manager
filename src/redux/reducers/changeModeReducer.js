const initialState = {
	signInMode: true,
};

const changeModeReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_MODE':
			return { ...state, ...!state.signInMode };

		default:
			return state;
	}
};

export default changeModeReducer;
