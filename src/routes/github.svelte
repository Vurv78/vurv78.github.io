<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import GithubCard from '$lib/GithubCard.svelte';
	import TopTitle from '$lib/TopTitle.svelte';
</script>

<title> Vurv78/github </title>
<Navbar/>

<div id="title">
	<TopTitle title="GitHub"/>
</div>
<div id="body">
	<center>
		<GithubCard repo="WebAudio" owner="vurv78"/>
		<GithubCard repo="VExtensions" owner="vurv78"/>
		<GithubCard repo="Autorun-rs" owner="vurv78"/>
	</center>
</div>
<Footer/>