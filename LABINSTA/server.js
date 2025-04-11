const express = require("express");
const path = require("path");
const { createServer } = require("http");
const usersRouter = require("./Server/routes/users.route.js");
const screen1EventsRouter = require("./Server/routes/screen1Events.router.js");
const { initSocketInstance } = require("./Server/services/socket.service.js");

const PORT = 5050;
const app = express();
const httpServer = createServer(app);

// Middlewares
app.use(express.json());
app.use("/client", express.static(path.join(__dirname, "client")));
app.use("/client2", express.static(path.join(__dirname, "client2")));

// Routes
app.use("/", usersRouter);
app.use("/", screen1EventsRouter);

// Services
initSocketInstance(httpServer);

// Add the direct client route handling
app.get('/client-1', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.get('/client-2', (req, res) => {
    res.sendFile(path.join(__dirname, "client2", "index.html"));
});

httpServer.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);