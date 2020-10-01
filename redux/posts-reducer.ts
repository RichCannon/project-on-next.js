import {PostType} from "../types/post";


const initialState = {
    posts: null as PostType[]
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POSTS': {
            console.log(action.posts);
            return {...state, posts: [...action.posts]}
        }
        default: {
            return state
        }
    }
}


export const actions = {
    setPosts: (posts) => ({
        type: 'ADD_POSTS',
        posts
    })
}




