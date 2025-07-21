import React, { useEffect, useState } from 'react';
import axios from 'axios';

const staticContacts = [
  {
    name: 'Keerthi',
    company: 'Abc Pvt Ltd',
    email: 'Abc@Gamil.Com',
    phone: '+9123589',
    lastActive: '5hr Ago',
  },
  {
    name: 'Keerthika',
    company: 'Xyz Pvt Ltd',
    email: 'Xyz@Gamil.Com',
    phone: '+9123589',
    lastActive: '1hr Ago',
  },
  {
    name: 'Dinesham',
    company: 'Mno Pvt Ltd',
    email: 'Mno@Gamil.Com',
    phone: '+9123589',
    lastActive: '1 Week Ago',
  },
  {
    name: 'Indrika',
    company: 'Def Pvt Ltd',
    email: 'Def@Gamil.Com',
    phone: '+9123529',
    lastActive: '2 Weeks Ago',
  },
];


const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get('/api/v1/contacts')
      .then((res) => {
        const data = res.data;

        if (Array.isArray(data)) {
          setContacts(data.length > 0 ? data : staticContacts);
        } else if (Array.isArray(data.contacts)) {
          setContacts(data.contacts.length > 0 ? data.contacts : staticContacts);
        } else {
          setContacts(staticContacts); // fallback
        }
      })
      .catch((err) => {
        console.error('Error fetching contacts:', err);
        setContacts(staticContacts); // fallback in case of error
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4 text-gray-700">Contacts</h1>

      <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
        <table className="min-w-full table-auto border-separate border-spacing-y-2">
          <thead>
            <tr className="text-left text-sm font-semibold text-gray-700 border-b">
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Company</th>
              <th className="py-2 px-3">Email</th>
              <th className="py-2 px-3">Phone</th>
              <th className="py-2 px-3">Last Active</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-600">
            {contacts.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-400">
                  No contacts found.
                </td>
              </tr>
            ) : (
              contacts.map((contact, index) => (
                <React.Fragment key={index}>
                  <tr className="bg-white hover:bg-gray-100 rounded-lg">
                    <td className="py-2 px-3">{contact.name}</td>
                    <td className="py-2 px-3">{contact.company}</td>
                    <td className="py-2 px-3">{contact.email}</td>
                    <td className="py-2 px-3">{contact.phone}</td>
                    <td className="py-2 px-3">{contact.lastActive || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td colSpan="5">
                      <hr />
                    </td>
                  </tr>
                </React.Fragment>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
