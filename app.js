const express = require('express');
const app = express();
const ruleRoutes = require('./routes/ruleRoutes');
require('dotenv').config();

app.use(express.json());
app.use('/api/rules', ruleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
