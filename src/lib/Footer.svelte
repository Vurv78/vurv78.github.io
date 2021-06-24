<script>
	import Icon from 'fa-svelte';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<div id="footer">
	<footer>
		<div style="padding: 0.5em;">
			<Icon icon={faEnvelope}/> vurvdevelops@gmail.com
			<a href="https://github.com/Vurv78">
				<Icon icon={faGithub}/> Vurv78
			</a>
		</div>
	</footer>
</div>

<style>
	footer {
		border-top: var(--bordersz) solid var(--accent-color);
		background-color: var(--secondary-color);

		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		text-align: center;
		color: var(--text-light);
		text-decoration: none;

		width: 100%;
		height: 50px;

		bottom: 0;
		right: 0;
		position: absolute;
		direction: left;
		text-shadow: 1px 1px black;
	}

	footer a {
		text-decoration: none;
		color: var(--text-light);
	}

	footer a:hover {
		color: #fff;
	}
</style>