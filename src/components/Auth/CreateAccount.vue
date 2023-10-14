<template>
    <section class="text-black font-poppins">
        <div class="dir flex items-center justify-center h-32 bg-slate-100  font-semibold p-10">
            <h1 class="text-3xl">Create New Customer Account</h1>
        </div>
        <div class="my-10 container mx-auto">
            <form class="flex flex-row w-full md:w-[80%] justify-center p-5 mx-auto flex-wrap" @submit.prevent>
                <div class="w-full md:w-1/2 flex flex-col text-left mb-5 px-5">
                    <div class="title">
                        <h2 class="text-2xl font-semibold">Personal Information</h2>
                    </div>
                    <div class="form-input my-5">
                        <label class="block  text-sm text-gray-500 mb-2" for="firstName">First Name <span
                                class="text-red-600">*</span>
                        </label>
                        <input type="text" v-model="firstName" name="firstName" id="firstName"
                            class="border border-gray-300 px-5 py-4 w-full text-sm" required>
                    </div>
                    <div class="form-input my-5">
                        <label class="block  text-sm text-gray-500 mb-2" for="lastName">Last Name
                            <span class="text-red-600">*</span>
                        </label>
                        <input type="text" name="lastName" id="lastName"
                            class="border border-gray-300 px-5 py-4 w-full text-sm" required v-model="lastName">
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex flex-col mb-5 px-5">
                    <div class="title">
                        <h2 class="text-2xl font-semibold">Sign-in Information</h2>
                    </div>
                    <div class="form-input my-5">
                        <label class="block  text-sm text-gray-500 mb-2" for="email">Email <span
                                class="text-red-600">*</span>
                        </label>
                        <input type="email" name="email" placeholder="name@domain.com" id="email"
                            class="border border-gray-300 px-5 py-4 w-full text-sm" required v-model="email">
                    </div>
                    <div class="form-input my-5">
                        <label class="block  text-sm text-gray-500 mb-2" for="password">Password <span
                                class="text-red-600">*</span>
                        </label>
                        <input type="password" name="password" id="password" @blur="checkPassword"
                            class="border border-gray-300 px-5 py-4 w-full  text-sm" required v-model="password">
                        <p v-if="errorMessagePassword" class="bg-white text-red-600">* {{ errorMessagePassword }}</p>
                        <p class="bg-white text-gray-600">Password Strength: {{ passwordStrength }}</p>
                    </div>
                    <div class="form-input my-5">
                        <label class="block  text-sm text-gray-500 mb-2" for="confirmPassword">Confirm Password
                            <span class="text-red-600">*</span>
                        </label>
                        <input type="password" name="confirmPassword" id="confirmPassword" required
                            class="border border-gray-300 px-5 py-4 w-full  text-sm" v-model="confirmPassword">
                    </div>
                </div>
                <div class="w-full md:w-[100%]  form-input mb-5 px-5">
                    <p class="bg-white text-red-600 mb-2">* Means Required</p>
                    <button @click="addUser"
                        class="w-[100%] md:w-[48%] p-5 text-lg bg-zinc-900 text-white font-poppins tracking-wide">
                        <span v-if="!loading">CREATE AN ACCOUNT</span>
                        <LoaderVue v-else />
                    </button>
                </div>
            </form>

        </div>

    </section>
</template>

<script setup>
import RegisterMixin from '../../mixins/RegisterMixin';
const {
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
    LoaderVue } = RegisterMixin()
</script>