const {Schema, model} = require('mongoose')
const {any} = require("codelyzer/util/function");

const schema = new Schema({
      _id: {type: String},
      name: {type: String},
      country: {type: String},
      subcountry: {type: String},
      geonameid: {type: Number},
})

module.exports = model('sailpointDB', schema, 'City')
