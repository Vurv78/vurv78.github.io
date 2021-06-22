<script>
	import Navbar from "$lib/Navbar.svelte";
	import Footer from "$lib/Footer.svelte";
	import TopTitle from "$lib/TopTitle.svelte";
</script>

<title> Vurv78 </title>

<Navbar/>
<TopTitle title="Vurv78"/>

<body class="center-paragraph">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</body>

<body class="center-paragraph">
	Lorem ipsum dolor sit amet. Sit sequi amet ut fugiat nobis sed excepturi iure ut quia eaque non veniam esse ut dolores corrupti. Sed possimus neque ut beatae laborum aut iste voluptas cum excepturi accusantium est minima sint sit debitis ipsa quo molestiae? Non quia eveniet qui nemo quia a nulla quia et aspernatur quos ut dolorum blanditiis ea iure rerum. Id cupiditate tenetur et perspiciatis quibusdam id nostrum quod.

	Et quia aperiam et ducimus consectetur At nostrum laboriosam ut quis consectetur sit voluptas consequatur et nisi autem aut sint dolor! Ut delectus placeat et quaerat dicta est odit culpa est velit nisi qui corporis rerum in dignissimos deleniti aut laboriosam sapiente. Et nostrum laboriosam sed necessitatibus dignissimos sed eveniet repudiandae 33 excepturi omnis qui reprehenderit laborum eum inventore dolorum.

	Ea quod voluptatem aut deleniti enim quo voluptas sunt sed consequatur perspiciatis et officia illum? Qui quos quia non distinctio nobis eos odit tempora et sapiente officia aut consequuntur consectetur ut facere doloribus.
</body>

<Footer/>

<style>
	/* Svelte sets padding to 8 by default */
	:global(body) {
		padding: 0;
		margin: 0;
		background-color: var(--primary-color);

		/* Global Vars */

		--bordersz: 1px;

		--primary-color: #f2f2f2;
		--secondary-color: #333;
		--third-color: #444;
		--tertiary-color: #edf0f8;
		--accent-color: #444;

		--text-color: #444444;
		--text-dark: #999;
	}

	body.center-paragraph {
		text-align: center;
		font-family: 'Times New Roman', Times, serif;
		padding-bottom: 30px;
	}
</style>