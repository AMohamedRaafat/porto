import { ref } from 'vue'
import { defineStore } from 'pinia'
import { axiosURL } from '../Config/axiosConfig'
const useSingleProduct = defineStore('getSingleProduct', () => {
  const singleProduct = ref({})
  const load = ref(true)
  const getProduct = async (id) => {
    load.value = true
    const res = await axiosURL.get(`/products/${id}`)
    singleProduct.value = res.data
    load.value = false
  }
  return {
    singleProduct,
    load,
    getProduct
  }
})
export default useSingleProduct
