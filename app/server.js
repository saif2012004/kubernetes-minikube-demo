const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sample data
const items = [
  { id: 1, name: "Item 1", description: "Description for item 1" },
  { id: 2, name: "Item 2", description: "Description for item 2" },
  { id: 3, name: "Item 3", description: "Description for item 3" },
];

// Routes
app.get("/api/items", (req, res) => {
  res.json(items);
});

app.get("/api/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

app.post("/api/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
