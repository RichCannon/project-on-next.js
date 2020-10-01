import MainLayout from "../../components/MainLayout/MainLayout";
import {useEffect, useState} from "react";
import Link from "next/link";
import {PostType} from "../../types/post";
import {NextPage, NextPageContext} from "next";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../redux/posts-reducer";
import {getPosts} from '../../api/api'


type PropsType = {
    posts: PostType[]
    //setPostsRedux: (arg1: PostType[]) => void
    //postsRedux:  PostType[]
}

const Posts = ({posts: serverPosts}: PropsType) => {
    //const [posts, setPosts] = useState(serverPosts)
    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.posts)



    useEffect(() => {
        if (!serverPosts) {
            dispatch({type: 'GET_POSTS_REQUEST'})
        }
        else {
            dispatch(actions.setPosts(serverPosts))
        }

    }, [dispatch])

    console.log(serverPosts);


    /* useEffect(() => {
         console.log('useEffect')
         const load = async () => {
             const response = await fetch('http://localhost:4200/posts')
             const data = await response.json()
             dispatch(actions.setPosts(data))
             //console.log(data);
         }

         if (!serverPosts) {
             load()
         }

     }, [])*/
    //console.log(posts);
    if (!posts) {
        console.log('loading');
        return <MainLayout><h1>Loading ...</h1></MainLayout>
    }

    return (
        <MainLayout title={'Posts page'}>
            <div>
                <h1>
                    All posts
                </h1>
                <ul>
                    {posts.map((post) => {
                        return <li key={post.id}>
                            <Link href={'post/[id]'} as={`/post/${post.id}`}>
                                <a>
                                    {post.title}
                                </a>
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({req}: NextPageContext) => {

    if (!req) {

        return {posts: null}
    }
    const response = await fetch(`http://localhost:4200/posts`)
    const posts = await response.json()
    //const posts = await getPosts()
    return {
        posts
    }

}

/*export async function getServerSideProps() {

    const response = await fetch(`${process.env.API_URL}/posts`)
    const posts:PropsType = await response.json()

    return {
        props: {
            posts
        }
    }
}*/

const mapStateToProps = (state) => ({
    postsRedux: state.posts.posts
})

const mapDispatchToProps = {
    setPostsRedux: actions.setPosts
}

//export default connect(mapStateToProps, mapDispatchToProps)(Posts)
export default Posts
