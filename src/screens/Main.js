import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

import Home from './Home';
import Stops from './Stops';
import Announcement from './Announcement';

export default function Main() {
  const [currentPage, setCurrentPage] = useState('Home');

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar changePage={changePage} currentPage={currentPage} />
      <main className="flex-1 p-5 lg:pl-64 ml-64 bg-gray-100 overflow-y-auto">
        {currentPage === 'Home' && <Home />}
        {currentPage === 'Stops' && <Stops />}
        {currentPage === 'Announcement' && <Announcement />}
      </main>
    </div>
  );
}
