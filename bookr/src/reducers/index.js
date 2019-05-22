import { SIGNUP_START, SIGNUP_FAIL, SIGNUP_SUCCESS,
LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL,
GETBOOKS_START, GETBOOKS_SUCCESS, GETBOOKS_FAIL,
FETCHBOOK_START, FETCHBOOK_SUCCESS, FETCHBOOK_FAIL,
POSTREVIEW_START, POSTREVIEW_SUCCESS, POSTREVIEW_FAIL } from "../actions";

const initialState = {
    books : [],
    users : [],
    member : "",
    member_id : "",
    activeBook : {},
    error : "",
    signingUp : false,
    logginIn : false,
    gettingBooks : false,
    fetchingBook: false,
    token : ""

}

const reducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
//-------SIGNUP---------//
        case SIGNUP_START:
            return {
                ...state,
                signingUp : true, 
                error : '',
                token: "",
                //member: "",
                //member_id: ""
            }
        case SIGNUP_SUCCESS:
            console.log(action.username, action.token)
            return {
                ...state,
                signingUp : false,
                member : action.username,
                member_id : action.user_id,
                token : action.token
            }
        case SIGNUP_FAIL:
            console.log(action.payload)
            return {
                ...state,
                signingUp : false,
                error : action.payload
            }

//-------LOGIN---------//
        case LOGIN_START:
            return {
                ...state,
                logginIn : true,
                error : "",
                token: "",
                //member: "",
                //member_id: ""

            }
        case LOGIN_SUCCESS:
            console.log("from reducer: " , action.user_id, action.username)
            
            return {
                ...state,
                logginIn : false,
                member : action.username,
                member_id : action.user_id,
                token : action.token
            }
        case LOGIN_FAIL:
            console.log(action.payload)
            return {
                ...state,
                logginIn : false,
                error : action.payload
            }

//-------GETBOOKS---------//
        case GETBOOKS_START:  
            return {
                ...state,
                gettingBooks : true,
                error: ""
            }
        case GETBOOKS_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                gettingBooks : false,
                books : action.payload
            }
        case GETBOOKS_FAIL:
            console.log(action.payload)
            return {
                ...state,
                gettingBooks : false,
                error : action.payload
            }
//--------FETCHBOOK-------//
         case FETCHBOOK_START:
            return {
                ...state,
                fetchingBook : true,
                error:""
            }
         case FETCHBOOK_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                fetchingBook : false,
                activeBook : action.payload
            }
         case FETCHBOOK_FAIL:   
            console.log(action.payload)
            return {
                ...state,
                retchingBook : false,
                error : action.payload
            }
//--------POSTREVIEW--------//
        case POSTREVIEW_START:
            return {
                ...state,
                error:""
            } 
        case POSTREVIEW_SUCCESS:
            //console.log("current active book reviews", state.activeBook.reviews)
           // const updatedActiveBook = state.activeBook.reviews.push(action.payload)
            //console.log(updatedActiveBook)
            return {
                ...state,
//                activeBook : updatedActiveBook
            }
            
        case POSTREVIEW_FAIL: 
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}


export default reducer;