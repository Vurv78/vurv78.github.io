<script>
	import Navbar from "$lib/Navbar.svelte";
	import Footer from "$lib/Footer.svelte";
	import TopTitle from "$lib/TopTitle.svelte";

	import Icon from 'fa-svelte';
	import { faRust } from '@fortawesome/free-brands-svg-icons';
	import Iconify from '@iconify/svelte';

	const OTHER_SITE_URL = "https://vurv.pythonanywhere.com/home";
</script>

<title> Vurv78 </title>

<Navbar/>
<TopTitle title="Vurv78"/>

<div>
	<center>
		<div class="main">
			This is a simple website that was made as a playground for small frontend projects and as a sort of display of what I've done.
			It is created with <Iconify icon="logos:svelte-icon"/> <a href="https://svelte.dev" alt="Svelte">Svelte</a>
			and <Iconify icon="logos:typescript-icon"/> <a href="https://www.typescriptlang.org" alt="Typescript">Typescript</a>.
			I am putting a heavy emphasis on learning more about the frontend with this as a project.
		</div>

		<div class="main">
			You can see how I would design stuff prior to this on my other more backend focused Website, <a href={OTHER_SITE_URL}>here</a>.
		</div>

		<div class="main">
			Languages I'm experienced in, by order of familiarity from left-right
			<ul>
				<li>
					<Iconify icon="logos:lua"/> Lua
				</li>
				<li>
					<Iconify icon="logos:haxe"/> Haxe
				</li>
				<li>
					<Icon icon={faRust}/> Rust
				</li>
				<li>
					<Iconify icon="logos:typescript-icon"/> Typescript
				</li>
				<li>
					<Iconify icon="logos:svelte-icon"/> Svelte
				</li>
			</ul>
		</div>
	</center>
</div>

<Footer/>

<style>
	@import "$lib/Main.css";

	.main {
		text-align: center;
		padding-bottom: 3em;
		width: 30em;

		font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		font-size: x-large;
	}

	.main ul {
		list-style-type: none;
		display: flex;
		justify-content: center;
	}

	div.main ul li {
		display: list-item;
		margin: 0 3px;
	}
</style>