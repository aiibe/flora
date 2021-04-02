import Fauna from 'faunadb'

export const q = Fauna.query
export const fauna = new Fauna.Client({
	secret: 'fnAEFbRC5ZACBSFJzydFdE_tQDA_ku99cLr9a52N',
})
