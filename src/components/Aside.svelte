<script>
	export let collections
</script>

<section class="section is-hidden-mobile">
	<div class="box">
		<aside class="aside menu">
			<ul class="menu-list">
				<li><a href="/">Dashboard</a></li>
				<li>
					<a href="/collections">
						Collections
						<span class="tag is-link is-light">{collections.length}</span>
					</a>
				</li>
			</ul>
		</aside>
	</div>
</section>