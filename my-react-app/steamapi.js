import react, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  // State to store data
  const [steamUserData, setSteamUserData] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);
  const [error, setError] = useState(null);

  // Your API key and Steam ID
  const steamAPIKey = "F7D54E00A3B946180A478D2C9BCB0D4C"; // Replace with environment variable or safe storage
  const steamID = "76561199008182076";

  // Fetch Steam user data
  useEffect(() => {
    const fetchSteamUser = async () => {
      try {
        const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${steamAPIKey}&steamids=${steamID}`;
        const response = await axios.get(url);
        setSteamUserData(response.data.response.players[0]);
      } catch (err) {
        setError("Error fetching Steam user data");
        console.error(err);
      }
    };

    fetchSteamUser();
  }, [steamAPIKey, steamID]);

  // Fetch order history data
  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const orderHistoryUrl = `https://api.example.com/order/history?apiKey=${steamAPIKey}&userId=${steamID}`;
        const response = await axios.get(orderHistoryUrl);
        setOrderHistory(response.data.orders);
      } catch (err) {
        setError("Error fetching order history");
        console.error(err);
      }
    };

    fetchOrderHistory();
  }, [steamAPIKey, steamID]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Steam User & Order History</h1>

      {/* Steam User Data */}
      {steamUserData ? (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Steam User Data</h2>
          <p>Username: {steamUserData.personaname}</p>
          <img
            src={steamUserData.avatar}
            alt="User Avatar"
            className="rounded-full"
          />
        </div>
      ) : (
        <p>Loading Steam user data...</p>
      )}

      {/* Order History */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Order History</h2>
        {orderHistory.length > 0 ? (
          <ul className="list-disc ml-6">
            {orderHistory.map((order) => (
              <li key={order.id}>
                Order ID: {order.id}, Total: ${order.total}
              </li>
            ))}
          </ul>
        ) : (
          <p>No order history found or loading...</p>
        )}
      </div>

      {/* Error Handling */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default App;
