const express = require('express');
const axios = require('axios');
const cors = require('cors');
const server = require('./src/App');

const PORT = 3001; // Puedes usar otro puerto si prefieres

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});