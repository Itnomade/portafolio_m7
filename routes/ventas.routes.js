import express from 'express'
import { generarVenta,getVentas } from '../controllers/venta.controller.js'
const router = express.Router()
// rutas //
router.get('/ventas', getVentas, (req, res) => {})
router.post('/ventas', generarVenta, (req, res) => {})

export default router;