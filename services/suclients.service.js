const boom = require('@hapi/boom')
// eslint-disable-next-line no-unused-vars
const { sequelize, models } = require('../libs/sequelize')
//const getConnection = require('../libs/mysql.pool')

class SuclientsService{

  constructor(){
  }

  async create(body){
   // const hashSuClient = 'calcular valor hash'
    const data = {
      //suclIdentificador: hashSuClient,
      suclEmail: body.email,
      suclNombre: body.name,
      suclNombres: body.name,
      suclApellidos: body.name,
      suclTelefono: body.phone,
      suclDireccionPrincipal: body.address,
      suclPais: body.country,
      suclRegion: body.region,
      suclCiudad: body.city,
      cucuId: 5522,
      suclEstatus: 1,
      //suclFechaRegistro: body.,
      //suclFechaActualizacion: body.,
      suclPostalCode: body.postal_code,
      suclClave:'claveee',
      suclParametrosAdicionales: body.additional_parameters,
      suclRut: body.rut,
      suclGiro: body.giro,
      suclRazonSocial: body.razon_social,
      suclTipo: body.type,
      suclObservaciones: body.observations,
      suclFechaNacimiento: body.birth_date,
      suclArchivado: body.archived
    }
    const suclient = await models.SuClients.create(data)
    if(!suclient){
      throw boom.notFound('El cliente no ha sido guardado')
    }else{/*
      const response = {
        status: "active",
        id: hashSuClient,
        "rut": "11111111",
        "name": "Joe Doe",
        "phone": "923122312",
        "email": "support@youwebsite.cl",
        "address": "Moneda 101",
        "country": "Chile",
        "region": "Metropolitana",
        "city": "Santiago",
        "postal_code": "850000",
        "created_at": "2020-09-29",
        "update_at": null,
        "subcriptions": null
      }
      */
    }
    return suclient
  }

  async find(){
    /*
    Opcion directa sql
    const query = 'SELECT * FROM  su_clientes limit 5'
    const [rows] = await sequelize.query(query)
    */

    /*
    Opcion con pool query
        const response = await new Promise((resolve) => {
          this.pool.query(query, function (error, rows) {
            if (error) throw error;
            resolve(rows)
          });
        });
    */
    const rows = await models.SuClients.findAll()
    return rows
  }

  async findOne(identifier){
    //const suclient = this.suclients.find(item => item.identifier === identifier)
    const suclient = await models.SuClients.findOne({ where: { sucl_identificador:identifier } })
    if(!suclient){
      throw boom.notFound('El cliente no ha sido encontrado')
    }
    if(suclient.isBlock){
      throw boom.conflict('El cliente esta bloqueado')
    }

    return suclient
  }

  async update(id, changes){
    const index = this.suclients.findIndex(item => item.id === id)
    if(index === -1){
      throw boom.notFound('El cliente no ha sido encontrado')
    }
    const suclient = this.suclients[index]
    this.suclients[index] = {
      ...suclient,
      ...changes
    }
    return this.suclients[index]
  }

  async delete(id){
    const index = this.suclients.findIndex(item => item.id === id)
    if(index === -1){
      throw boom.notFound('El cliente no ha sido encontrado')
    }
    this.suclients.splice(index,1)
    return {message : 'Cliente Eliminado'}
  }

}

module.exports = SuclientsService
