import { fauna, q } from '../../lib/fauna'

// Endpoint to get all collections
export async function get(req, res) {
	const { data } = await fauna.query(
		q.Map(
			q.Paginate(q.Collections()),
			q.Lambda((x) => q.Select('name', q.Get(x)))
		)
	)
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({ data }))
}

// Endpoint to create a new collection
export async function post(req, res) {
	const { name } = req.body
	if (!name)
		return res.end(JSON.stringify({ error: { description: 'Missing data' } }))
	// PROXY to Fauna
	try {
		const reply = await fauna.query(q.CreateCollection({ name }))
		res.end(JSON.stringify({ success: true, name: reply.name }))
	} catch (error) {
		res.end(JSON.stringify({ error }))
	}
}
