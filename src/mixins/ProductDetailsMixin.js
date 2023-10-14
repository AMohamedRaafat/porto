import { ref, onBeforeMount } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Icon } from '@iconify/vue'
import { useToast } from 'vue-toastification'
import LoaderVue from '@/components/Utilities/LoaderVue.vue'
import useSingleProduct from '@/stores/Product/useSingleProduct.js'
import useAddCart from '@/stores/Cart/useAddCart.js'

const ProductDetailsMixin = () => {
  const route = useRoute()
  const quantity = ref(1)
  const user = JSON.parse(localStorage.getItem('user'))
  const singleProductStore = useSingleProduct()
  const { getProduct } = useSingleProduct()
  const { singleProduct, load } = storeToRefs(singleProductStore)
  const { addToCart } = useAddCart()
  const toast = useToast()
  onBeforeMount(() => {
    getProduct(route.params.id)
    console.log(singleProduct.value)
  })

  const plusQuantity = () => {
    quantity.value++
  }
  const minusQuantity = () => {
    quantity.value == 1 ? 1 : quantity.value--
  }

  const addItem = () => {
    if (user) {
      addToCart({
        userId: user.id,
        products: [
          {
            id: route.params.id,
            quantity: quantity.value
          }
        ]
      })
    } else {
      toast.error('Please Sign in or register')
    }
  }

  return {
    singleProduct,
    load,
    plusQuantity,
    minusQuantity,
    addItem,
    quantity,
    Icon,
    LoaderVue,
    RouterLink,
    Swiper,
    SwiperSlide
  }
}
export default ProductDetailsMixin
