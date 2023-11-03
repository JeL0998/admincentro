import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AnnouncementCard from '../components/AnnouncementCard';

function PostEditor({ value, onChange }) {
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: '1' }, { header: '2' }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      ['link', 'image'],
      ['emoji'],
    ],
  };

  const formats = [
    'font',
    'header',
    'list',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'link',
    'image',
    'emoji',
  ];

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      placeholder="Give an Updates"
      className="bg-white border rounded-lg p-2 focus:outline-none focus:border-blue-500 flex-grow"
    />
  );
}

export default function Announcement() {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');
  const [editingPostIndex, setEditingPostIndex] = useState(-1);

  const addPost = () => {
    if (newPostText.trim() !== '') {
      const newPost = {
        text: newPostText,
      };
      setPosts([...posts, newPost]);
      setNewPostText('');
    }
  };

  const deletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const saveEditedPost = (index, newText) => {
    if (newText.trim() !== '') {
      const updatedPosts = [...posts];
      updatedPosts[index].text = newText;
      setPosts(updatedPosts);
      setEditingPostIndex(-1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-semibold mb-4">Announcement</h2>

      <div className="mb-4 flex justify-between items-center">
        <PostEditor value={newPostText} onChange={setNewPostText} />
        <button
          onClick={addPost}
          className="bg-blue-500 btn mt-3 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-600 focus:outline-none"
        >
          Post
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {posts.map((post, index) => (
          <div key={index}>
            {editingPostIndex === index ? (
              <div>
                <PostEditor value={post.text} onChange={(newText) => saveEditedPost(index, newText)} />
                <div className="mt-2">
                  <button
                    onClick={() => saveEditedPost(index, post.text)}
                    className="bg-green-500 btn mt-3 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <AnnouncementCard
                text={post.text}
                onEdit={() => setEditingPostIndex(index)}
                onDelete={() => deletePost(index)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
