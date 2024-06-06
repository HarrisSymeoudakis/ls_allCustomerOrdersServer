import axios from 'axios'; // Import Axios for making HTTP requests
import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// Encode username and password for Basic Authentication
const username = '90478305_003_TEST\\AI';
const password = '1234';
const auth = Buffer.from(`${username}:${password}`).toString('base64');

const headers = {
  'Authorization': `Basic ${auth}`,
  'Content-Type': 'application/json' // Adjust content type if needed
};

// Middleware to allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Update * to your specific origin if needed
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// All Customer Orders
app.get('/swagger/AllCustomerActiveOrders', async (req, res) => {
  try {
    
    const url = 'https://90478305-partner-retail-ondemand.cegid.cloud/Y2/90478305_003_TEST/api/customer-documents/v1?documentType=CustomerOrder&active=true';

    // Make a GET request to the Swagger page with defined headers
    const response = await axios.get(url, { headers });

    // Assuming the Swagger page returns JSON data
    const swaggerData = response.data;
    console.log('Received JSON data All Customer Active Orders:', swaggerData);
	
    // Respond with the data received from the API
    res.json(swaggerData);
  } catch (error) {
    console.error('Error fetching data All Customer Active Orders:', error);
    res.status(500).send('Error fetching data All Customer Active Orders');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});