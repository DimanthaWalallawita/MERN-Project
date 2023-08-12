import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const token = localStorage.getItem('token');

        if (token) {
          const response = await axios.get('http://localhost:5000/api/users/profile', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUserProfile(response.data.userProfile);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchProfile();
  }, []);

  return (
    <div>
      {userProfile ? (
        <div>
          <h2>User Profile</h2>
          <p>Email: {userProfile.email}</p>
          {/* Display other profile information */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default Profile;