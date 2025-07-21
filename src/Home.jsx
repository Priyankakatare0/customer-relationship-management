import React, { useRef } from 'react';
import Navbar from './Pages/Navbar';
import Menubar from './Components/Menu/Menubar';
import Dashboard from './Components/Menu/Dashboard';
import Contacts from './Components/Menu/Contacts';
import Tasks from './Components/Menu/Tasks';

const Home = () => {
  const dashboardRef = useRef(null);
  const contactsRef = useRef(null);
  const tasksRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'dashboard') dashboardRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'contacts') contactsRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'tasks') tasksRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex">
        <Menubar onScrollTo={scrollToSection} />
        <div className="flex-1 overflow-y-auto max-h-[93vh] p-4 space-y-10">
          <div ref={dashboardRef} id="dashboard">
            <Dashboard />
          </div>
          <div ref={contactsRef} id="contacts">
            <Contacts />
          </div>
          <div ref={tasksRef} id="tasks">
            <Tasks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
