<!-- Manage a collection -->

<script context="module">
	export async function preload(page) {
		const { collection } = page.params
		return { collection }
	}
</script>

<script>
	import { onDestroy } from 'svelte'
	import { goto } from '@sapper/app'
	import { notification, Collections } from '../../../store'
	$: name = collection
	let fetching = false
	let deleting = false

	async function handleSubmit() {
		fetching = true
		const opts = {
			method: 'PATCH',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, ref: collection })
		}
		const raw = await fetch('/fql/collections', { ...opts })
		const res = await raw.json()

		fetching = false

		// on error, flash
		if (res.error) return notification.set({ type: "error", message: res.error.description })

		// on success, update Collections
		Collections.update(c => [...c, res.name])

		// then redirect back
		goto(`/collections/${name}`)
	}

	async function handleDelete() {
		deleting = true
		const opts = {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ ref: collection })
		}
		const raw = await fetch('/fql/collections', { ...opts })
		const res = await raw.json()

		deleting = false

		// on error, flash
		if (res.error) return notification.set({ type: "error", message: res.error.description })

		// on success, update Collections
		Collections.update(c => c.filter(e => e !== res.name))

		// then redirect back
		goto(`/collections`)
	}

	onDestroy(() => notification.set(null))

	export let collection
</script>

<section class="section">
	<div class="breadcrumb" aria-label="breadcrumbs">
		<ul>
			<li>
				<a href="/collections" class="is-capitalized is-size-6">collections</a>
			</li>
			<li>
				<a href="{`/collections/${collection}`}" class="is-capitalized is-size-6">{collection}</a>
			</li>
			<li class="is-active">
				<a href="{`/collections/${collection}/settings`}" aria-current="page" class="is-capitalized">settings</a>
			</li>
		</ul>
	</div>

	<div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
		<h1 class="title is-size-4 mb-0">Settings</h1>
	</div>

	<div class="columns">
		<div class="column is-half">
			<div class="card">
				<div class="card-content">
					<form on:submit|preventDefault={handleSubmit}>
						<div class="field">
							<label class="label">Name</label>
							<div class="control">
								{#if $notification && $notification.type === 'error'}
								<input type="text" class="input is-danger" bind:value={name}>
								{:else}
								<input type="text" class="input" bind:value={name}>
								{/if}
							</div>
						</div>
						<div class="field is-grouped is-grouped-right">
							<p class="control">
								<a href="/collections" class="button">Cancel</a>
							</p>
							<p class="control">
								{#if fetching}
								<button class="button is-link is-loading" type="submit">Save</button>
								{:else}
								<button class="button is-link" type="submit">Save</button>
								{/if}
							</p>
						</div>
					</form>
				</div>
			</div>
			{#if deleting}
			<button class="button has-text-danger mt-2 is-small is-loading">DELETE</button>
			{:else}
			<button class="button has-text-danger mt-2 is-small" on:click={handleDelete}>DELETE</button>
			{/if}
		</div>
	</div>

</section>