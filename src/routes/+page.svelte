<script>
	import Certificates from '../components/Certificates.svelte';
	import Footer from '../components/Footer.svelte';
	import Hero1 from '../components/Hero1.svelte';
	import Projects from '../components/Projects.svelte';
	import Skills from '../components/Skills.svelte';
	import Timeline2 from '../components/Timeline2.svelte';
	import bgimg from '../bg2.jpg';
</script>

<div
	class="flex h-auto flex-col justify-center bg-slate-900 bg-cover bg-fixed bg-right-bottom"
	style="background-image: url('{bgimg}');"
>
	<Hero1 />
	<Timeline2 />
	<Skills />
	<Projects />
	<Certificates />
	<Footer />
</div>
