<script>
	import { goto } from '@sapper/app'
	import { notification } from '../../store'
	import { onDestroy } from 'svelte';
	let name = ''
	let fetching = false

	async function handleSubmit() {
		fetching = true
		const body = JSON.stringify({ name })
		const opts = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}
		const reply = await fetch('/fql/collections', opts, body)
		const { error } = await reply.json()
		fetching = false
		if (error) return notification.set({ type: "error", message: error.description })

		// Redirect to Collections
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