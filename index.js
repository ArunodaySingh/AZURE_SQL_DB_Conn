import express from 'express';
import sql from 'mssql';
const port = process.env.PORT || 3000;
const app = express();

let dbConfig = {
  server: "powerautomateassignmnt.database.windows.net",
  database: "Assignment",
  user: "arunoday",
  password: "Balrampur@123",
  port: 1433,
  options: {
    encrypt: true, // Enable if you're using Azure
    trustServerCertificate: false // Change based on your security requirements
  }
};

async function getCustomer() {
  try {
    let pool = await new sql.ConnectionPool(dbConfig).connect();
    let request = pool.request();

    let result = await request.query('SELECT * FROM [SalesLT].[Customer]');
    console.log(result.recordset);

    pool.close();
  } catch (err) {
    console.error(err);
  }
}

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

getCustomer();
