export default function createReducer(initialState,handelrs){
    return function reducer(state=initialState,action){
        if(handelrs.hasOwnProperty(action.type)){
            return handelrs[action.type](state,action)
        } 
        return state
    }
}