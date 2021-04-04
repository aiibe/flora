<svelte:head>
	<title>Collections | Flora</title>
</svelte:head>

<script>
	import { goto } from '@sapper/app'
	import { Collections } from '../../store'
</script>

<section class="section">

	<div class="breadcrumb" aria-label="breadcrumbs">
		<ul>
			<li><a href="/collections" class="is-capitalized is-size-6">collections</a></li>
		</ul>
	</div>

	<div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
		<h1 class="title is-size-4 mb-0">Collections</h1>
		<button class="button is-link is-small" on:click="{() => goto('/collections/new')}">NEW COLLECTION</button>
	</div>

	<div class="columns is-multiline">
		{#if $Collections.length > 0}
		{#each $Collections as item}
		<div class="column is-one-third">
			<div class="card mb-2">
				<div class="card-content">
					<p><a href="{`collections/${item}`}" class="is-capitalized ">{item}</a></p>
					<p class="is-size-7 has-text-grey-light">/{item}</p>
				</div>
			</div>
		</div>
		{/each}
		{:else}
		<tr>
			<p class="has-text-centered">No collections</p>
		</tr>
		{/if}
	</div>


</section>