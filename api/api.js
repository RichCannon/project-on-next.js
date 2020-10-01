

export const getPosts = async ()=> {
    const response = await fetch(`http://localhost:4200/posts`)
    return await response.json()
}

