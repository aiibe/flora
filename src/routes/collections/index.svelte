<svelte:head>
	<title>New Collections | Flora</title>
</svelte:head>

<script>
	import { fly } from 'svelte/transition'
	import { goto } from '@sapper/app'
	import { Collections } from '../../store'
</script>

<section class="section">

	<div class="breadcrumb" aria-label="breadcrumbs">
		<ul>
			<li><a href="/collections" class="is-capitalized is-size-6">collections</a></li>
		</ul>
	</div>

	<div class="is-flex is-align-items-center mb-4">
		<h1 class="title is-size-4 mb-0">Collections</h1>
		<button class="button is-link is-small ml-3 is-rounded" on:click="{() => goto('/collections/new')}">NEW
			COLLECTION</button>
	</div>

	<div class="columns is-multiline" in:fly="{{y:50, duration: 250, delay: 300}}" out:fly="{{y:50, duration: 250}}">
		{#if $Collections.length > 0}
		{#each $Collections as item}
		<div class="column is-one-third">
			<div class="card mb-2">
				<div class="card-content">
					<p><a href="{`collections/${item}`}" class="is-capitalized" sapper:noscroll>{item}</a></p>
					<p class="is-size-7 has-text-grey-light">/{item}</p>
				</div>
			</div>
		</div>
		{/each}
		{:else}
		<div class="column">
			<p class="has-text-centered">No collections</p>
		</div>
		{/if}
	</div>


</section>