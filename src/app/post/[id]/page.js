const Post = ({params})=>{
    console.log(params);
    // http://localhost:3000/post/raja
    // output in console: { id: 'raja' }
    return (
        <h1>Hello Post</h1>
    )
};

export default Post;