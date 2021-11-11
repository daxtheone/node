const {Model, DataTypes, Sequelize } = require('sequelize')
const SUCLIENTS_TABLE = 'su_clientes'

const SuClientsSchema = {
  suclId : {
    allowNull : false,
    autoIncrement : true,
    primaryKey : true,
    type : DataTypes.INTEGER,
    field: 'sucl_id'
  },
  suclIdentificador : {
    allowNull : false,
    type: DataTypes.STRING(25),
    field: 'sucl_identificador',
    defaultValue: 1//DataTypes.UUIDV4 random()

  },
  suclEmail : {
    allowNull : false,
    type: DataTypes.STRING(50),
    unique: true,
    field: 'sucl_email'

  },
  suclNombre : {
    allowNull : false,
    type: DataTypes.STRING(100),
    field: 'sucl_nombre'

  },
  suclNombres : {
    type: DataTypes.STRING(100),
    field: 'sucl_nombres'

  },
  suclApellidos : {
    type: DataTypes.STRING(100),
    field: 'sucl_apellidos'

  },
  suclTelefono : {
    type: DataTypes.STRING(25),
    field: 'sucl_telefono'

  },
  suclDireccionPrincipal : {
    type: DataTypes.STRING(250),
    field: 'sucl_direccion_principal'

  },
  suclPais : {
    type: DataTypes.STRING(50),
    field: 'sucl_pais'

  },
  suclRegion : {
    type: DataTypes.STRING(50),
    field: 'sucl_region'

  },
  suclCiudad : {
    type: DataTypes.STRING(50),
    field: 'sucl_ciudad'

  },
  cucuId : {
    allowNull : false,
    type: DataTypes.INTEGER,
    field: 'cucu_id'

  },
  suclEstatus : {
    allowNull : false,
    type: DataTypes.INTEGER,
    field: 'sucl_estatus'

  },
  suclFechaRegistro : {
    allowNull : false,
    type: DataTypes.DATE,
    field: 'sucl_fecharegistro',
    defaultValue: Sequelize.NOW
  },
  suclFechaActualizacion : {
    type: DataTypes.DATE,
    field: 'sucl_fechaactualizacion',
    defaultValue: null
  },
  suclPostalCode : {
    type: DataTypes.STRING(100),
    field: 'sucl_postal_code'

  },
  suclClave : {
    type: DataTypes.STRING(50),
    field: 'sucl_clave'

  },
  suclParametrosAdicionales : {
    type: DataTypes.TEXT,
    field: 'sucl_parametrosadicionales'

  },
  suclRut : {
    type: DataTypes.STRING(15),
    field: 'sucl_rut'

  },
  suclGiro : {
    type: DataTypes.STRING(100),
    field: 'sucl_giro'

  },
  suclRazonSocial : {
    type: DataTypes.STRING(150),
    field: 'sucl_razonsocial'

  },
  suclTipo : {
    type: DataTypes.STRING(50),
    field: 'sucl_tipo'

  },
  suclObservaciones : {
    type: DataTypes.STRING(500),
    field: 'sucl_observaciones'

  },
  suclFechaNacimiento : {
    type: DataTypes.STRING(20),
    field: 'sucl_fechanacimiento'

  },
  suclArchivado : {
    type: DataTypes.INTEGER,
    field: 'sucl_archivado'

  }

}

class SuClients extends Model {
  static associate(){

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: SUCLIENTS_TABLE,
      modelName: 'SuClients',
      timestamps: false
    }
  }

}

module.exports = { SUCLIENTS_TABLE, SuClientsSchema, SuClients}
