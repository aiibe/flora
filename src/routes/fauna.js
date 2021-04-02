import { fauna, q } from '../lib/fauna'

export async function get(req, res, next) {
	// const reply = await fauna.query(q.CreateCollection({ name: 'fruits' }))
	return res.end('hello')
}
