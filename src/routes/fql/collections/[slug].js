import { fauna, q } from '../../../lib/fauna'

export async function get(req, res) {
	const { slug } = req.params
	const { data } = await fauna.query(
		q.Map(
			q.Paginate(q.Documents(q.Collection(slug))),
			q.Lambda((x) => q.Select('data', q.Get(x)))
		)
	)
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({ data }))
}
