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
	<div class="card">
		<div class="card-header">
			<div class="card-header-title">
				<div class="breadcrumb" aria-label="breadcrumbs">
					<ul>
						<li><a href="/collections" class="is-capitalized">collections</a></li>
						<li class="is-active"><a href="{`/${slug}`}" aria-current="page" class="is-capitalized">{slug}</a></li>
					</ul>
				</div>
			</div>
			<div class="card-header-icon">
				<button class="button is-link is-small" on:click="{addItem}">ADD ITEM</button>
			</div>
		</div>
		<div class="card-content">
			{#if documents.length > 0}
			{#each documents as item}
			<p>{item.name}</p>
			{/each}
			{:else}
			<p class="has-text-centered">No item</p>
			{/if}
		</div>
	</div>
</section>