<script>
	import { goto } from '@sapper/app'
	let name = ''

	function handleSubmit() {
		// Check user input + CSRF ? 

		// console.log(name)
	}
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
								<input type="text" class="input" bind:value={name} autofocus>
							</div>
						</div>
						<div class="field is-grouped is-grouped-right">
							<p class="control">
								<a href="/collections" class="button">Cancel</a>
							</p>
							<p class="control">
								<button class="button is-link" type="submit">Save</button>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>