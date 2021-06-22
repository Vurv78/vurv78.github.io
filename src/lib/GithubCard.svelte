
<script>
	const GITHUB_ENDPOINT = "https://github.com/";
	const REPO_ENDPOINT = GITHUB_ENDPOINT + $$props.owner + "/" + $$props.repo;

	const CARD_ENDPOINT = "https://github-readme-stats.vercel.app/api/pin"
	const CARD_URL = CARD_ENDPOINT + "?username=" + $$props.owner + "&repo=" + $$props.repo;

	let showing_desc = false;
</script>

<div class="github-card">
	<a href={REPO_ENDPOINT}>
		<img src={CARD_URL} alt={$$props.repo}/>
	</a>
</div>

<style>
	div.github-card {
		width: 50%;
	}
</style>