
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
 

function App() { 
   const [bookmarks,setBookmarks] = useState([])
   const [readingTime,setReadTime] = useState(0)
   const handleAddToBookmakr = (blog)=>{
       const newBookmarks = [...bookmarks,blog]
       setBookmarks(newBookmarks);
   }

   const hanldeMakrAsRead = (id,readTime)=>{
         setReadTime(readingTime + readTime)
         //remove the read blog from bookmark
        //  console.log('remoded',id)
        const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
        setBookmarks(remainingBookmarks)
   }
  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
       <Blogs hanldeMakrAsRead={hanldeMakrAsRead} handleAddToBookmakr={handleAddToBookmakr}></Blogs>
       <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
