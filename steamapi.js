const axios = require("axios");

const steamAPIKey = F7D54E00A3B946180A478D2C9BCB0D4C; // Replace with your Steam API key
const steamID = "76561199008182076"; // Replace with a valid Steam user ID

const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${steamAPIKey}&steamids=${steamID}`;

axios
  .get(url)
  .then((response) => {
    console.log(response.data.response.players[0]);
  })
  .catch((error) => {
    console.error("Error fetching Steam data:", error);
  });

// URL for account details and order history
const accountDetailsUrl = `https://api.example.com/account/details?apiKey=${F7D54E00A3B946180A478D2C9BCB0D4C}&userId=${76561199008182076}`;
const orderHistoryUrl = `https://api.example.com/order/history?apiKey=${F7D54E00A3B946180A478D2C9BCB0D4C}&userId=${76561199008182076}`;

// Fetch account details
axios
  .get(accountDetailsUrl)
  .then((response) => {
    console.log("Account Details:", response.data);
    document.getElementById(
      "account-info"
    ).innerHTML = `Name: ${response.data.name}, Email: ${response.data.email}`;
  })
  .catch((error) => console.error("Error fetching account details:", error));

// Fetch order history
axios
  .get(orderHistoryUrl)
  .then((response) => {
    console.log("Order History:", response.data);
    const orderList = response.data.orders
      .map((order) => `<li>Order ID: ${order.id}, Total: $${order.total}</li>`)
      .join("");
    document.getElementById(
      "order-history"
    ).innerHTML = `<ul>${orderList}</ul>`;
  })
  .catch((error) => console.error("Error fetching order history:", error));
