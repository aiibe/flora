import { fauna, q } from '../lib/fauna'

export async function get(req, res) {
	const { data } = await fauna.query(
		q.Map(
			q.Paginate(q.Documents(q.Collection('veggies'))),
			q.Lambda((x) => q.Get(x))
		)
	)

	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({ data }))
}
