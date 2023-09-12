import PropTypes from 'prop-types';
import Bookmark from '../Blog/Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3  ml-4 py-4 mt-20 space-y-6 px-5">
            <div className='bg-violet-200 border border-violet-700 p-8 rounded-md'>
                <h4 className='text-3xl font-semibold text-violet-700'>Reading Time: {readingTime}</h4>
            </div>
           <div className='bg-gray-300 py-6'>
           <h2 className='text-3xl text-center font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
               bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
           </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;