import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleAddToBookmakr,hanldeMakrAsRead}) => {
    const {id,title,cover,author_img,author,posted_date,reading_time,
        hashtags} = blog
    return (
        <div className='mb-20 space-y-4 mt-6 mx-[3%] border pb-4 rounded-lg'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt={`cover picture of the title ${title}`}/>
            <div className='flex justify-between items-stretch px-3'>
                <div className='flex items-center'>
                   <img className='w-14' src={author_img}/>
                   <div className='ml-6'>
                    <h3 className='text-2xl '>{author}</h3>
                    <p>{posted_date}</p>
                   </div>
                </div>
                <div className='flex items-center space-x-3'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmakr(blog)} className='text-xl text-violet-700'><FaBookmark/></button>
                </div>
            </div>
            <h2 className='text-4xl px-3'>{title}</h2>
            <p className='px-3'>
                {
                    hashtags.map((has,idx)=><span key={idx}><a href=''># {has}</a></span>)
                }
            </p>
            <button onClick={()=>hanldeMakrAsRead(id,reading_time
)} className='text-purple-600 font-bold underline px-3'>Mark As Read </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmakr: PropTypes.func, 
    hanldeMakrAsRead: PropTypes.func  
}
export default Blog;