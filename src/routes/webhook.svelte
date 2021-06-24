
<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import TopTitle from '$lib/TopTitle.svelte';

	import Icon from 'fa-svelte';
	import { faLink, faCommentDots, faTag } from '@fortawesome/free-solid-svg-icons';

	const DISCORD_URL_PATTERN = "https:\/\/discord.com\/api\/webhooks/\\d+/\\w+";
	const DISCORD_URL_EXP = new RegExp(DISCORD_URL_PATTERN);

	function getInputElement(name: string): HTMLInputElement {
		const element = document.getElementById(name);
		return element as HTMLInputElement;
	}

	function sendRequest(args: MouseEvent) {
		const webhook_url = getInputElement("url").value;

		if (!webhook_url) return;
		if (!DISCORD_URL_EXP.test(webhook_url)) return;

		const request = new XMLHttpRequest();
		request.open("POST", webhook_url);
		request.setRequestHeader("Content-type", "application/json");
		request.send( JSON.stringify({
			"content": getInputElement("content").value,
			"username": getInputElement("name").value,
			"avatar_url": ""
		}) );
	}
</script>

<Navbar/>
	<TopTitle title="Discord Webhook Sender"/>
	<div style="margin-top: 50px">
		<center>
			<label for="url">
				<Icon icon={faLink}/> Webhook URL
			</label>
			<input id="url" type="url" required maxlength=400 placeholder="https://discord.com/api/webhooks" pattern={DISCORD_URL_PATTERN}/>

			<label for="name">
				<Icon icon={faTag}/> Name
			</label>
			<input id="name" type="text" maxlength=32 spellcheck=true placeholder="Chad"/>

			<label for="content">
				<Icon icon={faCommentDots}/> Content
			</label>
			<input id="content" type="text" maxlength=2000 spellcheck=true placeholder="Hello world!"/>

			<button on:click={sendRequest}>Send</button>
		</center>
	</div>
<Footer/>

<style>
	@import '$lib/Main.css';

	label {
		font-size: 20px;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
	}

	input {
		display: grid;

		margin-bottom: 1%;
		height: 4em;
		width: 40em;
		font-size: 15px;
		text-align: center;
	}

	input:invalid {
		color: red;
	}

	input:valid {
		color: black;
	}

	button {
		display: grid;

		border-radius: 5px;
		border-style: groove;
		box-shadow: 8px 8px 2px 2px rgba(0, 0, 200, .15);

		width: 10em;
		height: 2em;
		margin-bottom: 2em;

		font-size: xx-large;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

		text-align: center;
		color: var(--primary-color);
		background-color: var(--accent-color);
	}

	button:active {
		background-color: var(--secondary-color);
	}
</style>