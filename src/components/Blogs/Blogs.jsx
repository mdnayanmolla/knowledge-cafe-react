import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmakr,hanldeMakrAsRead}) => {
   const [blogs,setBlogs] = useState([])
   useEffect(()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data=> setBlogs(data))
   },[])
    return (
        <div className="md:w-2/3 mt-6">
            <h1 className="text-4xl font-bold text-center">Blogs: {blogs.length}</h1>
            {
                blogs.map( blog=><Blog 
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmakr={handleAddToBookmakr}
                    hanldeMakrAsRead={hanldeMakrAsRead}>
                </Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmakr: PropTypes.func,
    hanldeMakrAsRead:PropTypes.func,
}
export default Blogs;