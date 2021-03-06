import React from "react"
import Counter from "./Counter"
import Post from "./Post"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Posts = () => {

    const [title, setTitle] = React.useState("")
    const [body, setBody] = React.useState("")
    const [posts, setPosts] = React.useState([])


    React.useEffect(() => {
        console.log("mounted")

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err))


    }, [])


    const [count, setCount] = React.useState(0);
    const handleAdd = () => {
        setCount(count + 1)
    }


    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setPosts([

            {
                title: title,
                body: body
            }, ...posts
        ])
        setTitle("")
        setBody("")
    }



    return (
        <div>


            <Counter count={count} handleAdd={handleAdd} />
            <Counter count={count} handleAdd={handleAdd} />

            <div>
                <form className="form"  >
                <TextField id="outlined-basic" label="Title" variant="outlined" value={title} onChange={handleTitleChange}/>
                <TextField id="outlined-basic" label="Body" variant="outlined" value={body} onChange={handleBodyChange}/>
                <Button onClick={handleSubmit} variant="contained">Submit</Button>
                </form>
            </div>
            <div className="container">
                {posts.map((post) => <Post title={post.title} body={post.body} />)}
            </div>


        </div>
    );

}
export default Posts