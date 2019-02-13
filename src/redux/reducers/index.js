import { ADD_ARTICLE } from "../constants/action-types";

const initialStates={
    articles: []
};

function rootReducer(state = initialStates, action){
   
    switch(action.type){
        case ADD_ARTICLE:
             return Object.assign({},state,{
                 articles : state.articles.concat(action.payload)
             });
        break;

        default:
        return state;
    }
}

export default rootReducer;