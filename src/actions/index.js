import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder.js';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())

    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    console.log(userIds)
    userIds.forEach(id => dispatch(fetchUser(id)))


}

// Can still make normal action creators that reutrn normal actions, in this file
// But with above action creator, we have to call dispatch manually for the action we are trying to dispatch
export const fetchPosts = () =>  async dispatch => { 
    const response = await jsonPlaceholder.get('/posts')

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`)
//     dispatch({ type: 'FETCH_USER', payload: response.data})
// })

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({ type: 'FETCH_USER', payload: response.data})
}