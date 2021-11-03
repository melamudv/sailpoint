const express = require('express');
const cors = require('cors')
const config = require('config')
const mongoose = require('mongoose');

const app = express();
app.use(cors({
  origin: '*'
}));
const PORT = config.get('port');
app.use(express.json({ extended: true }))
app.use('/api/search', require('./routes/search.routes'));

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



