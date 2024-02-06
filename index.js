import express from 'express';
import sql from 'mssql';
import cors from 'cors';
import dbConfig from './config/database.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Request received: GET /");
  res.json("Hello, this is a GET request response.");
});

app.post("/", async (req, res) => {
  console.log("Request received: POST /");
  try {
    const { query } = req.body;
    console.log("Query:", query);

    const pool = await new sql.ConnectionPool(dbConfig).connect();
    const request = pool.request();
    const result = await request.query(query);

    console.log("Query Result:", result.recordset);
    res.status(200).json({ result: result.recordset });
    
    pool.close();
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
