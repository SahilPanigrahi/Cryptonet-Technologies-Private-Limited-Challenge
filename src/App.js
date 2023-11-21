import React, { useState, useEffect } from 'react';

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const userImage = userData ? userData.picture.large : null;
  const userFirstName = userData ? userData.name.first : null;
  const userLastName = userData ? userData.name.last : null;
  const userGender = userData ? userData.gender : null;
  const userPhone = userData ? userData.phone : null;

  return (
    <div className="flex justify-center items-center h-screen">
      {userData ? (
        <div className="flex border-4 border-black p-8">
          <div className="w-32 h-32 border border-black">
            <img src={userImage} alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="ml-4">
            <p className="mb-1">Name: {userFirstName} {userLastName}</p>
            <p className="mt-2">Gender: {userGender}</p>
            <p className="mt-2">Phone: {userPhone}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
