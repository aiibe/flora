<script>
	import { goto } from '@sapper/app'
	import { notification, Collections } from '../../store'
	import { onDestroy } from 'svelte';
	let name = ''
	let fetching = false

	async function handleSubmit() {
		fetching = true
		const opts = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name })
		}
		const raw = await fetch('/fql/collections', { ...opts })
		const res = await raw.json()
		fetching = false

		// on error, flash
		if (res.error) return notification.set({ type: "error", message: res.error.description })

		// on success, update Collections
		Collections.update(c => [...c, res.name])

		// then redirect back
		goto('/collections')
	}

	// Reset Notifications before unmount
	onDestroy(() => notification.set(null))
</script>

<section class="section">
	<div class="columns">
		<div class="column is-half">
			<div class="card">
				<div class="card-header">
					<div class="card-header-title">New collection</div>
				</div>
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
		</div>
	</div>
</section>