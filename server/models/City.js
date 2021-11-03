const {Schema, model} = require('mongoose')

const schema = new Schema({
      _id: {type: String},
      name: {type: String},
      country: {type: String},
      subcountry: {type: String},
      geonameid: {type: Number},
})

module.exports = model('sailpointDB', schema, 'City')
