import React, { useEffect, useState } from 'react';
import axios from 'axios';

const staticLogs = [
  {
    user: 'Keerthi',
    action: 'Logged in',
    time: '2 minutes ago',
    avatar: 'https://i.pravatar.cc/40?img=5'
  },
  {
    user: 'Bizplus4u',
    action: 'Uploaded a file',
    time: '10 minutes ago',
    avatar: 'https://i.pravatar.cc/40?img=3'
  },
  {
    user: 'Keerthi',
    action: 'Updated profile',
    time: '1 hour ago',
    avatar: 'https://i.pravatar.cc/40?img=7'
  }
];

const RecentActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get('/api/v1/integrations/logs')
      .then((res) => {
        const data = res.data;

        if (Array.isArray(data)) {
          setActivities(data.length > 0 ? data : staticLogs);
        } else if (Array.isArray(data.logs)) {
          setActivities(data.logs.length > 0 ? data.logs : staticLogs);
        } else {
          setActivities(staticLogs);
        }
      })
      .catch((err) => {
        console.error('Error fetching activities:', err);
        setActivities(staticLogs);
      });
  }, []);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activities</h3>

      <div className="bg-white p-4 rounded-2xl shadow space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start justify-between border-b pb-3 last:border-b-0">
            <div className="flex items-center gap-3">
              <img
                src={activity.avatar || `https://i.pravatar.cc/40?img=${index + 1}`}
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
              <div>
                <p className="font-semibold text-sm text-black">
                  {activity.user || activity.name || 'Unknown User'}
                </p>
                <p className="text-sm text-gray-600">
                  {activity.action || activity.message || 'Performed an action'}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              {activity.time || activity.timestamp || 'Just now'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
