export const initialState={
    user:null,
    playlist:[],
    playing:false,
    item:null,
    // remove after finish developing
    // token:'BQBPHS8t1Sfi0NPRbFPm-ciNTuYlvIOtz4h2LXr53ve6M8ZqyjPmR0kvY_jQ43384eoosxvHRtQL_gvQ8ukFkouSi3li_gIJwAcruND7WoHhI3xINJOBZhNPCQA0Wk2ZUpT3lXQcAOTbg7w9-kIBhcLIBxuODw29-T8llwobVmpSmVcqCov5zKe5n_3QjmqIEX2s985IGm17AD-RXqzS',
};
const reducer=(state,action)=>{
    console.log(action);
    // Action --> type,[payload]
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user,
            }; 
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            };
            default:
                return state;

    }

}
export default reducer;