import React, { useState } from 'react';

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]); // Define comments as an array of strings
  const [newComment, setNewComment] = useState<string>(''); // Define newComment as a string

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]); // Add new comment to the list
      setNewComment(''); // Clear the input field
    }
  };

  return (
    <div className="flex flex-col items-center sm:max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="mb-6">
        <textarea
          className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your comment here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)} // Update newComment state
        ></textarea>
        <button
          className="mt-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
          onClick={handleAddComment} // Call handleAddComment on button click
        >
          Post Comment
        </button>
      </div>
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-md shadow-md">
              <p className="text-gray-800">{comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
// 'use client'; // Ensure this is the first line
// import React, { useState } from 'react';

// const CommentSection = () => {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       setComments([...comments, newComment]);
//       setNewComment('');
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-4">Comments</h2>
//       <div className="mb-6">
//         <textarea
//           className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Write your comment here..."
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//         ></textarea>
//         <button
//           className="mt-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
//           onClick={handleAddComment}
//         >
//           Post Comment
//         </button>
//       </div>
//       <div className="space-y-4">
//         {comments.length > 0 ? (
//           comments.map((comment, index) => (
//             <div key={index} className="p-4 bg-gray-100 rounded-md shadow-md">
//               <p className="text-gray-800">{comment}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No comments yet. Be the first to comment!</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CommentSection;
