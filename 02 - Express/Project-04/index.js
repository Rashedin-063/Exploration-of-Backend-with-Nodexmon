require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;




app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
