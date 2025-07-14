import React from 'react';

const activities = [
  {
    name: 'Keerthi Bizplus',
    message: 'logged for call',
    time: '1 hour ago',
    avatar: 'https://i.pravatar.cc/40?img=1',
  },
  {
    name: 'Dinesh Bizplus',
    message: 'meeting schedule with xyz corp',
    time: '5 hour ago',
    avatar: 'https://i.pravatar.cc/40?img=2',
  },
  {
    name: 'Keerthika Bizplus',
    message: 'Added a lead',
    time: 'yesterday',
    avatar: 'https://i.pravatar.cc/40?img=3',
  },
];

const RecentActivities = () => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activities</h3>
      <div className="bg-white p-4 rounded-2xl shadow space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start justify-between border-b pb-3 last:border-b-0">
            <div className="flex items-center gap-3">
              <img src={activity.avatar} alt="avatar" className="h-8 w-8 rounded-full" />
              <div>
                <p className="font-semibold text-sm text-black">{activity.name}</p>
                <p className="text-sm text-gray-600">{activity.message}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">{activity.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
