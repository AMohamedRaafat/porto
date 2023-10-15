import { RouterLink } from 'vue-router'
import { ref, inject } from 'vue'
const TopBannerMixin = () => {
  const $cookies = inject('$cookies')
  const token = $cookies.get('token')
  const userdata = JSON.parse(localStorage.getItem('user'))

  const links = ref([
    {
      title: token
        ? ` Welcome ${userdata.firstName + ' ' + userdata.lastName}`
        : 'Welcome to Porto',
      path: '/proto'
    },
    {
      title: 'Blog',
      path: '/blog'
    },
    {
      title: token ? 'Sign Out' : 'Sign In',
      path: '/login',
      signOutMethod: () => {
        if (token) {
          document.cookie = 'token = '
          $cookies.remove('token')
          localStorage.removeItem('user')
          location.assign('/porto')
        }
      }
    },
    {
      title: 'Contact us',
      path: '/contact'
    },
    {
      title: token ? '' : 'Create an Account',
      path: token ? '' : '/register'
    }
  ])
  const show = ref(false)
  const currency = ref('USD')
  const alternateCurrency = ref('EUR')

  const toggleShow = () => {
    show.value = !show.value
  }
  const changeCurrency = (newValue, oldValue) => {
    currency.value = newValue
    alternateCurrency.value = oldValue
    toggleShow()
  }
  return {
    links,
    show,
    currency,
    alternateCurrency,
    toggleShow,
    changeCurrency,
    RouterLink
  }
}
export default TopBannerMixin
