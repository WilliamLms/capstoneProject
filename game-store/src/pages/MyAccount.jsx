import React, { useEffect, useState } from "react";

function MyAccount() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from local storage or backend API
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <p>Loading account details...</p>;
  }

  return (
    <div>
      <h2>My Account</h2>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default MyAccount;
