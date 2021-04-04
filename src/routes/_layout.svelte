<script>
	import Nav from '../components/Nav.svelte';
	import Aside from '../components/Aside.svelte';
	import Notification from '../components/Notification.svelte'
	import { Collections } from '../store'

	export let segment;
</script>

<script context="module">
	// Hydration
	export async function preload() {
		// Need to fetch App state instead
		console.log('Hydration')
		const res = await this.fetch('/fql/collections')
		const collections = await res.json()
		Collections.update(c => [...collections.data])
	}
</script>

<Notification />
<Nav {segment} />
<main class="container">
	<div class="columns">
		<div class="column is-one-quarter">
			<Aside />
		</div>
		<div class="column">
			<slot></slot>
		</div>
	</div>
</main>