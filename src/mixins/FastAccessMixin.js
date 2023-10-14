import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import useCart from '@/stores/Cart/useCart'
import MiniCart from '@/components/Header/LargeNav/MiniCartComp/MiniCart.vue'
import useSingleProduct from '@/stores/Product/useSingleProduct'

const FastAccessMixin = () => {
  const useCartStore = useCart()
  const { cart } = storeToRefs(useCartStore)
  const cartShow = ref(false)
  const allProduct = useSingleProduct()
  const { getProduct } = useSingleProduct()
  const { singleProduct } = storeToRefs(allProduct)

  const handleShowCart = () => {
    cartShow.value = !cartShow.value
  }

  return {
    cartShow,
    handleShowCart,
    cart,
    MiniCart,
    Icon,
    singleProduct,
    getProduct
  }
}

export default FastAccessMixin
