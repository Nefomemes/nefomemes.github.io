<template>
<div>
<div id="intro">

		<div class="background">
			<video loop autoplay muted class="bg-video">

				<source src="bf4_heat.webm" />
			</video>
		</div>


		<div id="title">
			<p id="username">Nefomemes</p>
			<p id="message">Hey there! I do coding and stuff.</p>
		</div>

		<div id="signin-circle">
		</div>


	</div>
<!--
	<div id="stacks" class="box">
<div id="stacks-masterized" class="stack-box">
	
	<div class="stack" v-for="stack in info.master"></div>
	<img v-bind:src="stack">
	</div>
	
	</div>
-->


</div>
</template>
<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
