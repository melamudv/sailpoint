const express = require('express');
const cors = require('cors')
const config = require('config')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(cors({
  origin: '*'
}));
app.use(express.json({ extended: true }))

app.use('/api/search', require('./routes/search.routes'));
const PORT = config.get('port');
async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()



