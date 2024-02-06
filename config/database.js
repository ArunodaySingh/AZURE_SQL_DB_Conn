const dbConfig = {
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
  
  export default dbConfig;
  