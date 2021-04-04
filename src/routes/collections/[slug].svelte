<script context="module">
	export async function preload(page) {
		const { slug } = page.params
		// TODO check slug
		const reply = await this.fetch(`/fql/collections/${slug}`)
		const { data } = await reply.json()
		const documents = [...data]
		return { documents, slug }
	}
</script>

<script>
	function addItem() {
		// TODO
	}
	export let documents, slug
</script>

<svelte:head>
	<title>{slug} | Flora</title>
</svelte:head>

<section class="section">

	<div class="breadcrumb" aria-label="breadcrumbs">
		<ul>
			<li><a href="/collections" class="is-capitalized">collections</a></li>
			<li class="is-active"><a href="{`/${slug}`}" aria-current="page" class="is-capitalized">{slug}</a></li>
		</ul>
	</div>
	<div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
		<h1 class="title is-size-4 mb-0 is-capitalized">{slug}</h1>
		<button class="button is-link is-small" on:click="{addItem}">ADD ITEM</button>
	</div>

	<div class="columns is-multiline">
		{#if documents.length > 0}
		{#each documents as item}
		<div class="column is-one-third">
			<div class="card mb-2">
				<div class="card-content">
					<pre>{JSON.stringify(item, null, 1)}</pre>
					<a href="{`collections/${slug}`}">Edit</a>
				</div>
			</div>
		</div>
		{/each}
		{:else}
		<tr>
			<p class="has-text-centered">No item</p>
		</tr>
		{/if}
	</div>

</section>