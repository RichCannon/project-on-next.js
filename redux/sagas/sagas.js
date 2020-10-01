import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import {getPosts} from "../../api/api";
import {actions} from "../posts-reducer";


export function* setPost() {
    const response = yield call(getPosts)
    yield put(actions.setPosts(response))
}


const saga = [
    takeLatest('GET_POSTS_REQUEST', setPost)
]

export default function* rootSaga() {
    yield all([
        ...saga
    ])
}
