<template>
<div>
<Nuxt/>
<NefoFooter/>
<script src="//cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init();</script>
</div>
</template>

<script>

import NefoFooter from '~/components/NefoFooter.vue'


export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  components: {
  NefoFooter
  }
}
</script>
