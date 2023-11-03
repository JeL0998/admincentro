import React from 'react';

function AnnouncementCard({ text, onEdit, onDelete }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div dangerouslySetInnerHTML={{ __html: text }} className="prose max-w-none" />
      <div className="mt-2">
        <button onClick={onEdit} className="text-blue-500 hover:underline focus:outline-none">
          Edit
        </button>
        <button onClick={onDelete} className="text-red-500 ml-2 hover:underline focus:outline-none">
          Delete
        </button>
      </div>
    </div>
  );
}

export default AnnouncementCard;
