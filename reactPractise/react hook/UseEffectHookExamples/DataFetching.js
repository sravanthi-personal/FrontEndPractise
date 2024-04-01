import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFetching() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setPosts(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    },[]); // to fetch only once


  return (

    <div>
        <ul>
            {
                posts.map(post => (<li key={post.id}>{post.title}</li>))
            }
        </ul>
    </div>
  )
}

export default DataFetching