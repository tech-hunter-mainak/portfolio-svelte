<script>
	import Card from '../components/Card.svelte';
	import Card2 from '../components/Card2.svelte';
	import ExperienceCards from '../components/ExperienceCards.svelte';
	import Hero from '../components/Hero.svelte';
	import Projects from '../components/Projects.svelte';
	import Timeline from '../components/Timeline.svelte';
	import Timeline2 from '../components/Timeline2.svelte';
</script>

<div
	class="flex h-auto flex-col justify-center bg-slate-900 bg-[url(../src/bg2.jpg)] bg-cover bg-fixed bg-right-bottom"
>
	<Hero />
	<Timeline2 />
	<ExperienceCards />
	<Projects />
</div>
