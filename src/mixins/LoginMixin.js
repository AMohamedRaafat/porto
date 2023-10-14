import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import useLogin from '@/stores/Auth/useLogin'
import { useRouter } from 'vue-router'
import LoaderVue from '@/components/utilities/LoaderVue.vue'
const LoginMixin = () => {
  const router = useRouter()
  const username = ref('')
  const password = ref('')
  const token = document.cookie
  const { userLogin } = useLogin()
  const loadingState = useLogin()
  const { loading } = storeToRefs(loadingState)
  console.log(loading.value)
  const clickToLogin = () => {
    userLogin({ username: username.value, password: password.value })
  }

  return {
    router,
    token,
    username,
    password,
    loading,
    clickToLogin,
    LoaderVue
  }
}

export default LoginMixin
