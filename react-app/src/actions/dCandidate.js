import api, {} from "./api";

// export const create = data =>{
//     return {
//         type : 'create',
//         payload: data
//     }
// }

//dispath(create({fullName:''}))

export const ACTION_TYPES = {
    CREATE:'CREATE',
    UPDATE:'UPDATE',
    DELETE:'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

export const fetchAll = () => dispatch => {
    api.dCandidate()
    .then(
        response => {
            dispatch({
                type:ACTION_TYPES.FETCH_ALL,
                payload:response.data
            })
        }
    )
    .catch(err => console.log(err))
    
}