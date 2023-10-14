import { ref } from 'vue'
import { defineStore } from 'pinia'
import { axiosURL } from '../Config/axiosConfig'
import { useToast } from 'vue-toastification'
const toast = useToast()
const useLogin = defineStore('AuthReducer', () => {
  const loading = ref(false)

  const userLogin = async (data) => {
    loading.value = true
    try {
      const res = await axiosURL.post('/auth/login', data)
      document.cookie = `token = ${res.data.token}`
      localStorage.setItem('user', JSON.stringify(res.data))
      if (res.status == 200) {
        toast.success('Login Success')
        loading.value = false
        setTimeout(() => {
          window.location.assign('/')
        }, 1500)
      }
    } catch (err) {
      if (err.response.status == 400) {
        toast.error('incorecct username or password')
        loading.value = false
      }
    }
  }
  return { loading, userLogin }
})
export default useLogin
