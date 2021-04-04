import 'dotenv/config'

import sirv from 'sirv'
import express from 'express'
import compression from 'compression'
import { json } from 'body-parser'
import * as sapper from '@sapper/server'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

module.exports = express() // You can also use Express
	.use(
		json(),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, (err) => {
		if (err) console.log('error', err)
	})
