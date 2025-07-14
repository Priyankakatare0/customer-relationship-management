import React from 'react';

const Contacts = () => {
  const contacts = [
    { name: 'Keerthi', company: 'Abc Pvt Ltd', email: 'Abc@Gamil.Com', phone: '+9123589', lastActive: '5hr Ago' },
    { name: 'Keerthika', company: 'Xyz Pvt Ltd', email: 'Xyz@Gamil.Com', phone: '+9123589', lastActive: '1hr Ago' },
    { name: 'Dinesham', company: 'Mno Pvt Ltd', email: 'Mno@Gamil.Com', phone: '+9123589', lastActive: '1 Week Ago' },
    { name: 'Indrika', company: 'Def Pvt Ltd', email: 'Def@Gamil.Com', phone: '+9123529', lastActive: '2 Weeks Ago' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-xl font-semibold mb-4 text-gray-700">Contacts</h1>

      <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
        <table className="min-w-full table-auto border-separate border-spacing-y-2">
          <thead>
            <tr className="text-left text-sm font-semibold text-gray-700 border-b">
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Company</th>
              <th className="py-2 px-3">Email</th>
              <th className="py-2 px-3">Phone</th>
              <th className="py-2 px-3">Last Actve</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-600">
            {contacts.map((contact, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100 rounded-lg">
                <td className="py-2 px-3">{contact.name}</td>
                <td className="py-2 px-3">{contact.company}</td>
                <td className="py-2 px-3">{contact.email}</td>
                <td className="py-2 px-3">{contact.phone}</td>
                <td className="py-2 px-3">{contact.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
