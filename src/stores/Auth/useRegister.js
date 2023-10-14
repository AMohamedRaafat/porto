import { ref } from 'vue'
import { defineStore } from 'pinia'
import { axiosURL } from '../Config/axiosConfig'
import { useToast } from 'vue-toastification'

const toast = useToast()
const useRegister = defineStore('useRegister', () => {
  const loading = ref(false)
  const userRegister = async (data) => {
    loading.value = true
    const res = await axiosURL.post('/users/add', data)
    console.log(res)
    toast.success('Customer added successfully')
    loading.value = false
    // setTimeout(() => {
    //   location.assign('/login')
    // }, 1500)
  }
  return {
    loading,
    userRegister
  }
})
export default useRegister
