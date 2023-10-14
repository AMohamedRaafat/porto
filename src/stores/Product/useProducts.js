import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { axiosURL } from '../Config/axiosConfig'
const useProducts = defineStore('products', () => {
  const products = ref([])
  const load = ref(true)
  const fetchProducts = async () => {
    const res = await axiosURL.get('/products')
    products.value = res.data.products
    load.value = !load.value
  }
  onMounted(() => {
    fetchProducts()
  })
  return {
    products,
    load
  }
})
export default useProducts
