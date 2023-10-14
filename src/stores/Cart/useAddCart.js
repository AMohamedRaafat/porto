import { defineStore } from 'pinia'
import { axiosURL } from '../Config/axiosConfig.js'
import { useToast } from 'vue-toastification'
const toast = useToast()

const useAddCart = defineStore('useAddCart', () => {
  const addToCart = async (data) => {
    try {
      const res = await axiosURL.post('carts/add', data)
      console.log(res)
      if (res.status == 200) {
        toast.success('Item added to cart')
      }
    } catch (err) {
      if (err.response.status == 400) {
        toast.error('There was an error in add item, please try again')
      }
    }
  }

  return {
    addToCart
  }
})

export default useAddCart
