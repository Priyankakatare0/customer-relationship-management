import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get('/api/v1/contacts')
      .then((res) => {
        const data = res.data;

        // Handle various possible response shapes
        if (Array.isArray(data)) {
          setContacts(data);
        } else if (Array.isArray(data.contacts)) {
          setContacts(data.contacts);
        } else {
          setContacts([]); // fallback
        }
      })
      .catch((err) => {
        console.error('Error fetching contacts:', err);
        setContacts([]); // fallback in case of error
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
                    <td className="py-2 px-3">
                      {contact.lastActive || 'N/A'}
                    </td>
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
