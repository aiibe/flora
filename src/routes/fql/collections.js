import { fauna, q } from '../../lib/fauna'

export async function get(req, res) {
	const { data } = await fauna.query(
		q.Map(
			q.Paginate(q.Collections()),
			q.Lambda((x) => q.Get(x))
		)
	)
	console.log(data)

	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({ data }))
}
