import {useState, useEffect} from 'react'
import {useRouter} from "next/router";
import MainPage from "../../components/MainLayout/MainLayout";
import {NextPage, NextPageContext} from "next";
import {PostType} from "../../types/post";

type PropsType = {
    post: PostType
}

const Post: NextPage<PropsType> = ({post: serverPost}) => {
    const router = useRouter()
    const [post, setPost] = useState(serverPost)


    useEffect(() => {
         const load = async () => {
             const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
             const data = await response.json()
             setPost(data)
         }

         if (!serverPost) {
             load()
         }
    }, [])

    if (!post) {
        return <MainPage><h1>Loading ...</h1></MainPage>
    }

    return (
        <MainPage title={`Post page`}>
            <h1>
                {post.title}
            </h1>
            <hr/>
            <p>
                {post.description}
            </p>
        </MainPage>
    )

}

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

Post.getInitialProps = async ({query, req}: PostNextPageContext) => {
    if (!req) {
        return {post: null}
    }
    const response = await fetch(`${process.env.API_URL}/posts/${query.id}`)
    const post: PostType = await response.json()
    return {
        post
    }

}


export default Post
