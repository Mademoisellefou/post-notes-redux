import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'
import PostAuthor from './PostAuthor'
import { selectAllPosts } from './postsSlice'
import TimeAgo from './TimeAgo'
function PostList() {
    const posts = useSelector(selectAllPosts);
    const orderedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    const renderedPost = orderedPost.map(post => (
        <article className='art-post' key={post.id}>
            <h3>
                {post.title}
            </h3>
            <p>
                {post.content.substring(0, 100)}
            </p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
        </article>
    ))
    return (
        <section>
            <Navbar changeroute={'create-note'} />
            <h2>Posts</h2>
            {renderedPost}
        </section>
    )
}

export default PostList
