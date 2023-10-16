import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { axiosURL } from '../Config/axiosConfig.js'

const user = JSON.parse(localStorage.getItem('user'))
const useCart = defineStore('useCart', () => {
  const cart = ref(null)
  const getMyCart = async () => {
    try {
      const res = await axiosURL(`/carts/${user.id}`)
      cart.value = res.data
    } catch (err) {
      cart.value = err.message
    }
  }
  onMounted(() => {
    if (user) {
      getMyCart()
    }
  })
  return {
    cart,
    getMyCart
  }
})

export default useCart
