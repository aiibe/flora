<script context="module">
	export async function preload(page) {
		const { collection } = page.params
		// TODO check collection
		const reply = await this.fetch(`/fql/collections/${collection}`)
		const { data } = await reply.json()
		const documents = [...data]
		return { documents, collection }
	}
</script>

<script>
	import { fly } from 'svelte/transition'
	function addItem() {
		// TODO
	}
	export let documents, collection
</script>

<svelte:head>
	<title>{collection} | Flora</title>
</svelte:head>

<section class="section">

	<div class="breadcrumb" aria-label="breadcrumbs">
		<ul>
			<li><a href="/collections" class="is-capitalized">collections</a></li>
			<li class="is-active">
				<a href="{`/collections/${collection}`}" aria-current="page" class="is-capitalized">{collection}</a>
			</li>
		</ul>
	</div>
	<div class="is-flex is-align-items-center mb-4">
		<h1 class="title is-size-4 mb-0 is-capitalized">{collection}</h1>
		<button class="button is-small ml-3 is-rounded">
			<a href="{`/collections/${collection}/settings`}">SETTINGS</a>
		</button>
		<button class="button is-link is-small ml-3 is-rounded" on:click="{addItem}">ADD ITEM</button>
	</div>

	<div class="columns is-multiline" in:fly="{{y:50, duration: 250, delay: 300}}">
		{#if documents.length > 0}
		{#each documents as item}
		<div class="column is-one-third">
			<div class="card mb-2">
				<div class="card-image">
					<pre style="background-color: #fbfbfb;">{JSON.stringify(item, null, 1)}</pre>
				</div>
				<div class="card-content">
					<a href="{`collections/${collection}`}">Edit</a>
				</div>
			</div>
		</div>
		{/each}
		{:else}
		<div class="column">
			<p>No item</p>
		</div>
		{/if}
	</div>

</section>