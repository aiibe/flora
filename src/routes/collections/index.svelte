<svelte:head>
	<title>Flora</title>
</svelte:head>

<script context='module'>
	export async function preload() {
		const reply = await this.fetch('/fql/collections')
		const { data } = await reply.json()
		return { items: data }
	}
</script>

<script>
	import { goto } from '@sapper/app'
	export let items
</script>

<section class="section">
	<div class="card">
		<div class="card-header">
			<div class="card-header-title">Collections</div>
			<div class="card-header-icon">
				<button class="button is-link is-small" on:click="{() => goto('/collections/new')}">NEW COLLECTION</button>
			</div>
		</div>
		<div class="card-content">
			{#if items.length > 0}
			{#each items as item}
			<p>{item.name}</p>
			{/each}
			{:else}
			<p class="has-text-centered">No collections</p>
			{/if}
		</div>
	</div>
</section>