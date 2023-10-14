import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import useRegister from '@/stores/Auth/useRegister'
import LoaderVue from '@/components/utilities/LoaderVue.vue'
const { userRegister } = useRegister()
const registeLoad = useRegister()
const { loading } = storeToRefs(registeLoad)
const RegisterMixin = () => {
  var regExp = /^[a-z0-9][a-z0-9_-]{2,18}[a-z0-9]$/i
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const errorMessagePassword = ref('')
  const passwordStrength = ref('')
  const checkPassword = () => {
    if (regExp.test(password)) {
      errorMessagePassword.value = ''
      passwordStrength.value = 'Strong'
      return true
    } else {
      console.log(false)
      errorMessagePassword.value =
        'Password must contain at least one number and one special character'
      return false
    }
  }
  const addUser = () => {
    // if (checkPassword())
    userRegister({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value
    })
  }
  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    errorMessagePassword,
    passwordStrength,
    checkPassword,
    loading,
    addUser,
    LoaderVue
  }
}
export default RegisterMixin
