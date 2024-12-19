<script>
	import Card from '../components/Card.svelte';
	import Card2 from '../components/Card2.svelte';
	import Certificates from '../components/Certificates.svelte';
	import ContactForm from '../components/ContactForm.svelte';
	import Footer from '../components/Footer.svelte';
	import Hero from '../components/Hero.svelte';
	import Hero1 from '../components/Hero1.svelte';
	import LeetCode from '../components/LeetCode.svelte';
	import LeetCode1 from '../components/LeetCode1.svelte';
	import Projects from '../components/Projects.svelte';
	import Skills from '../components/Skills.svelte';
	import Timeline from '../components/Timeline.svelte';
	import Timeline2 from '../components/Timeline2.svelte';
</script>

<div
	class="flex h-auto flex-col justify-center bg-slate-900 bg-[url(../src/bg2.jpg)] bg-cover bg-fixed bg-right-bottom"
>
	<Hero1 />
	<Timeline2 />
	<Skills />
	<Projects />
	<Certificates />
	<Footer />
</div>
