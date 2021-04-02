<script>
	import Nav from '../components/Nav.svelte';
	import Aside from '../components/Aside.svelte';

	export let segment;
</script>

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