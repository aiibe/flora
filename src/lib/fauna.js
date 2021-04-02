import Fauna from 'faunadb'

export const q = Fauna.query
export const fauna = new Fauna.Client({
	secret: process.env.FAUNA_SERVER_KEY,
})
