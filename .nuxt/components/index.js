export { default as Logo } from '../../components/Logo.vue'
export { default as NefoFooter } from '../../components/NefoFooter.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyNefoFooter = import('../../components/NefoFooter.vue' /* webpackChunkName: "components/nefo-footer" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c)
