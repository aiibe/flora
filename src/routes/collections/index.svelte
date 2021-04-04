<svelte:head>
	<title>Collections | Flora</title>
</svelte:head>

<script>
	import { goto } from '@sapper/app'
	import { Collections } from '../../store'
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
			{#if $Collections.length > 0}
			{#each $Collections as item}
			<p><a href="{`collections/${item}`}">{item}</a></p>
			{/each}
			{:else}
			<p class="has-text-centered">No collections</p>
			{/if}
		</div>
	</div>
</section>