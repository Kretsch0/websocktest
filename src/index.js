import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla11!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

var connection = new WebSocket(
  "wss://hvi4v23mo4.execute-api.us-east-1.amazonaws.com/dev"
);

connection.onopen = function() {
  connection.send(
    JSON.stringify({
      action: "sendMessage",
      name: "johndoe",
      channelId: "General",
      content: "tests"
    })
  ); // Send the message 'Ping' to the server
};

// Log errors
connection.onerror = function(error) {
  console.log("WebSocket Error " + error);
};

// Log messages from the server
connection.onmessage = function(e) {
  console.log("Server: " + e.data);
};
