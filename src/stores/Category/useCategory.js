import { defineStore } from 'pinia'
import { axiosURL } from '../Config/axiosConfig'
import { onMounted, ref } from 'vue'
const useCategory = defineStore('category', () => {
  const categories = ref([])
  const load = ref(true)
  const fetchCategories = async () => {
    const res = await axiosURL.get('/products/categories')
    categories.value = res.data
  }
  onMounted(() => {
    fetchCategories()
  })
  return {
    categories,
    load
  }
})
export default useCategory
