/* eslint-disable no-unused-vars */
const joi = require('joi')
const id = joi.number().integer()
const identifier = joi.string().min(10).max(30)
const email = joi.string().email().max(50);
const name = joi.string().min(3).max(100)
const first_name = joi.string().min(3).max(100)
const last_name = joi.string().min(3).max(100)
const phone = joi.string().min(3).max(25)
const address = joi.string().min(3).max(255)
const country = joi.string().min(3).max(50)
const region = joi.string().min(3).max(50)
const city = joi.string().min(3).max(50)
const cuentaid = joi.number().integer()
const estatus = joi.number().integer()
const register_date = joi.date()
const update_date = joi.date()
const postal_code = joi.string().min(3).max(100)
const clave = joi.string().min(3).max(50)
const additional_parameters = joi.string().min(3)
const rut = joi.string().min(3).max(15)
const giro = joi.string().min(3).max(100)
const razon_social = joi.string().min(3).max(150)
const type = joi.string().min(3).max(50)
const observations = joi.string().min(3).max(500)
const birth_date= joi.string().min(3).max(20)
const archived = joi.number().integer()


const createSuclientSchema = joi.object({
  email: email.required(),
  name: name.required(),
  phone: phone.required(),
  address,
  country,
  region,
  city,
  postal_code,
  additional_parameters,
  rut,
  giro,
  razon_social,
  type,
  observations,
  birth_date,
  archived
})

const updateSuclientSchema = joi.object({
  name: name,
 // price: price,
  //image: image,

})

const getSuclientSchema = joi.object({
  identifier: identifier.required()
})


module.exports = {createSuclientSchema, updateSuclientSchema, getSuclientSchema}
