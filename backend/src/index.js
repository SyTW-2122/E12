const express = require('express');
const app = express();

require('./database')


app.use(express.json())
app.use('/api', require('./routes/index'))

app.listen(3000, () => {
  console.log('Server is running on port 3000')
});