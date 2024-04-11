import React, { useState } from 'react';

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Important Announcement 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', urgent: false },
    { id: 2, title: 'Important Announcement 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', urgent: true },
    { id: 3, title: 'Important Announcement 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', urgent: true },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({ title: '', content: '', urgent: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement({ ...newAnnouncement, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setNewAnnouncement({ ...newAnnouncement, [name]: checked });
  };

  const handleAddAnnouncement = () => {
    setAnnouncements([...announcements, { ...newAnnouncement, id: announcements.length + 1 }]);
    setNewAnnouncement({ title: '', content: '', urgent: false });
    setShowForm(false);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#f7f7f7', border: '1px solid #ccc' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Announcements</h2>
      <button style={{ marginBottom: '20px', padding: '8px 16px', borderRadius: '5px', background: '#3366cc', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={() => setShowForm(!showForm)}>Add Announcement</button>
      {showForm && (
        <div style={{ marginBottom: '20px', padding: '20px', borderRadius: '10px', background: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <input type="text" name="title" placeholder="Title" value={newAnnouncement.title} onChange={handleInputChange} style={{ marginBottom: '10px', width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <textarea name="content" placeholder="Content" value={newAnnouncement.content} onChange={handleInputChange} style={{ marginBottom: '10px', width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <label style={{ marginRight: '10px' }}>
            <input type="checkbox" name="urgent" checked={newAnnouncement.urgent} onChange={handleCheckboxChange} style={{ marginRight: '5px' }} />
            Urgent
          </label>
          <button style={{ padding: '8px 16px', borderRadius: '5px', background: '#3366cc', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={handleAddAnnouncement}>Add</button>
        </div>
      )}
      {announcements.map((announcement) => (
        <div key={announcement.id} style={{ marginBottom: '20px', padding: '20px', borderRadius: '10px', background: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            {announcement.urgent && <span style={{ marginLeft: '5px', padding: '4px 8px', borderRadius: '5px', background: '#dc3545', color: '#fff', fontWeight: 'bold', fontSize: '14px' }}>Urgent</span>}
          </div>
          <h3 style={{ color: '#3366cc', marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>{announcement.title}</h3>
          <p>{announcement.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Announcement;
