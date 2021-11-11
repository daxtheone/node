const express = require('express')
const SuclientsService = require('../services/suclients.service')
const validatorHandler = require('../middlewares/validator.handler')
const {  getSuclientSchema, updateSuclientSchema, createSuclientSchema} = require('../schemas/suclient.schema')



const router = express.Router();
const service = new SuclientsService()

router.get('/',async(req, res)=>{
  const suclients = await service.find()
  console.log('suclients: ', suclients )
  res.status(200).json(suclients)
})

router.get('/:identifier',
  validatorHandler(getSuclientSchema, 'params'),
  async(req, res, next)=>{
    try {
      const {identifier} = req.params
      const suClient = await service.findOne(identifier)
      console.log('suclients: ', suClient )
      res.status(200).json(suClient)
    } catch (error) {
      next(error)
    }

  }
)

router.post('/',
  validatorHandler(createSuclientSchema, 'body'),
  async(req, res, next)=>{
    try {
      const body = req.body
      console.log(body)
      const newSuclient = await service.create(body)
      res.status(201).json(newSuclient)
    } catch (error) {
      next(error)
    }

  }
)


router.patch('/:id',
  validatorHandler(getSuclientSchema, 'params'),
  validatorHandler(updateSuclientSchema, 'body'),
  async(req, res,next)=>{
    try {
      const { id } = req.params
      const body = req.body
      const suclient = await service.update(id, body)
      res.json(suclient)
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id',async(req, res)=>{
  const { id } = req.params
  const response = await service.delete(id)
  res.json(response)
})

module.exports = router;
