import React, { useState, useEffect } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import RecentActivities from './RecentActivities';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalLeads: 0,
    activeDeals: 0,
    contactCount: 0,
    reportCount: 0,
    tasksDueToday: 0,
  });

  const cards = [
    { title: 'Total Leads', value: metrics.totalLeads },
    { title: 'Active Deals', value: metrics.activeDeals },
    { title: 'Contact List', value: metrics.contactCount },
    { title: 'Reports', value: metrics.reportCount },
    { title: 'Tasks Due Todo', value: metrics.tasksDueToday },
  ];

  useEffect(() => {
    axios
      .get('/api/v1/dashboard/metrics')
      .then((res) => {
        setMetrics({
          totalLeads: res.data.totalLeads || 0,
          activeDeals: res.data.activeDeals || 0,
          contactCount: res.data.contactCount || 0,
          reportCount: res.data.reportCount || 0,
          tasksDueToday: res.data.tasksDueToday || 0,
        });
      })
      .catch((err) => {
        console.error('Error fetching dashboard metrics:', err);
      });
  }, []);

  return (
    <div className="px-6 py-4">
      {/* Header */}
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
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-blue-600">{card.value}</p>
              <ChevronRightIcon className="h-4 w-4 text-blue-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <RecentActivities />
    </div>
  );
};

export default Dashboard;
