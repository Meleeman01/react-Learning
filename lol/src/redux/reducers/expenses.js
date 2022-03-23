import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE} from '../action-types/expenses';
const initialState = {
    expenseList:[],
    query:'',
};

export const expenseReducer = (state = initialState, action) => {
    switch(action.type) {

    case ADD_EXPENSE:{
        return {
            ...state,
            expenseList:[...state.expenseList,action.data]
        };
    }

    case DELETE_EXPENSE:{
        const {data} = action;
        const updatedList = state.expenseList.filter(item=>item.createdAt!==data.createdAt);
        return{
            ...state,
            expenseList:updatedList
        };
    }
    case SEARCH_EXPENSE: {
        //destructure from action
        const {query} = action;
        return {
            ...state,
            query
        };
    }

    default:{
        return state;
    }
    }
};
