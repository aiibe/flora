<script>
	import { notification } from '../store'
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

{#if $notification}
<div class="container">
	<div class="columns is-centered">
		<div class="column is-half is-relative">
			<div class="notification is-danger" transition:slide="{{delay: 250, duration: 200, easing: quintOut }}">
				<button class="delete" on:click="{() => notification.set(null)}"></button>
				{$notification.message}
			</div>
		</div>
	</div>
</div>
{/if}

<style>
	.notification {
		position: absolute;
		width: 100%;
		z-index: 999;
		padding: .5rem 1rem;
	}
</style>