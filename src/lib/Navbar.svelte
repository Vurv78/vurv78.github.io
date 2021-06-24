<script>
	import Icon from 'fa-svelte';
	import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
	import { faHome } from '@fortawesome/free-solid-svg-icons';
</script>

<section>
	<nav class="navbar">
		<li>
			<a href="/">
				<Icon icon={faHome} /> Home
			</a>
		</li>
		<li>
			<a href="/github">
				<Icon icon={faGithub} /> Github
			</a>
		</li>
		<li>
			<a href="/webhook">
				<Icon icon={faDiscord} /> Webhook Sender
			</a>
		</li>
	</nav>
</section>

<style>
	.navbar {
		margin: 0;
		font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

		display: block;
		overflow: hidden;
		border-bottom: var(--bordersz) solid var(--accent-color);
		background-color: var(--secondary-color);
	}

	.navbar li {
		display: block;
		padding: 14px 16px;

		overflow: hidden;
		float: left;
	}

	.navbar li a {
		color: var(--text-lighter);
		text-decoration: none;
		text-shadow: 2px 1px var(--text-color);
	}

	.navbar li:hover {
		background-color: #222;
	}
</style>