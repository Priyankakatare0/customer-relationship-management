import React, { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import RecentActivities from './RecentActivities';

const Dashboard = () => {
  const [leads, setLeads] = useState(1570);
  const [deals, setDeals] = useState(520);

  const cards = [
    { title: 'Total Leads', value: leads },
    { title: 'Active Deals', value: deals },
    { title: 'Contact List', link: './contact' },
    { title: 'Reports', link: './report' },
    { title: 'Tasks Due Todo', link: './tasks' },
  ];

  return (
    <div className="px-6 py-4">
      {/* Header with Title and Buttons */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-blue-600">Dashboard</h2>

        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700">
            Add Deal
          </button>
          <button className="border border-gray-400 px-5 py-2 rounded-lg font-medium text-gray-800 hover:bg-gray-100">
            Add Contact
          </button>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-[200px] bg-white rounded-2xl shadow p-4 flex flex-col justify-between"
          >
            <h3 className="text-md font-bold text-black mb-2">{card.title}</h3>

            {card.value !== undefined ? (
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-blue-600">{card.value}</p>
                <ChevronRightIcon className="h-4 w-4 text-blue-600" />
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <a
                  href={card.link}
                  className="text-sm text-blue-600 font-semibold hover:underline"
                >
                  View Details
                </a>
                <ChevronRightIcon className="h-4 w-4 text-blue-600" />
              </div>
            )}
          </div>
        ))}
      </div>
      <RecentActivities />

    </div>
  );
};

export default Dashboard;
