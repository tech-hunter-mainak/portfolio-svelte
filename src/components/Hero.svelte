<script>
	import Card from './Card.svelte';
	import Cube from './Cube.svelte';
</script>

<section class="flex h-[120vh] items-center justify-around">
	<div
		class="h-[300px] w-[300px] bg-[url(../src/mainak.jpg)] bg-contain bg-no-repeat bg-left-bottom"
		style="clip-path: polygon(15% 0, 100% 25%, 55% 100%, 0 90%);"
	></div>
	<div class="flex h-full flex-col justify-evenly">
		<div>
			<div class="font-bold text-4xl" style="color: rgb(124, 124, 124);">Hey there, its MAINAK</div>
			<div class="card">
				<div class="loader">
					<p>loading</p>
					<div class="words">
						<span class="word">buttons</span>
						<span class="word">forms</span>
						<span class="word">switches</span>
						<span class="word">cards</span>
						<span class="word">buttons</span>
					</div>
				</div>
			</div>

			<style>
				.card {
					/* color used to softly clip top and bottom of the .words container */
					border-radius: 1.25rem;
					width: fit-content;
				}
				.loader {
					color: rgb(124, 124, 124);
					font-family: 'Poppins', sans-serif;
					font-weight: 500;
					font-size: 25px;
					-webkit-box-sizing: content-box;
					box-sizing: content-box;
					height: 40px;
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					border-radius: 8px;
				}

				.words {
					overflow: hidden;
					position: relative;
				}
				.words::after {
					content: '';
					position: absolute;
					inset: 0;
					background: linear-gradient(
						var(--bg-color) 10%,
						transparent 30%,
						transparent 70%,
						var(--bg-color) 90%
					);
					z-index: 20;
				}

				.word {
					display: block;
					height: 100%;
					padding-left: 6px;
					color: #956afa;
					animation: spin_4991 10s infinite;
				}

				@keyframes spin_4991 {
					10% {
						-webkit-transform: translateY(-102%);
						transform: translateY(-102%);
					}

					25% {
						-webkit-transform: translateY(-100%);
						transform: translateY(-100%);
					}

					35% {
						-webkit-transform: translateY(-202%);
						transform: translateY(-202%);
					}

					50% {
						-webkit-transform: translateY(-200%);
						transform: translateY(-200%);
					}

					60% {
						-webkit-transform: translateY(-302%);
						transform: translateY(-302%);
					}

					75% {
						-webkit-transform: translateY(-300%);
						transform: translateY(-300%);
					}

					85% {
						-webkit-transform: translateY(-402%);
						transform: translateY(-402%);
					}

					100% {
						-webkit-transform: translateY(-400%);
						transform: translateY(-400%);
					}
				}
			</style>
		</div>
		<Cube />
	</div>
</section>
