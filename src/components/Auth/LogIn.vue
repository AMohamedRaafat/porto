<template>
    <section class="login  font-poppins text-black">

        <div v-if="!token">
            <div class="dir flex items-center justify-center h-32 bg-slate-100  font-semibold p-10">
                <h1 class="text-3xl">Customer Login</h1>
            </div>
            <div class="my-20 container mx-auto">
                <div class="form mx-auto w-[70%] md:w-[45%] ">
                    <div class="flex w-full items-left text-black justify-center flex-col">
                        <div class="form-text mb-5 text-left">
                            <h2 class="font-bold text-xl mb-5">Registered Customers</h2>
                            <p class="text-gray-600">If you have an account, sign in with your email address.</p>
                        </div>
                        <div class="form-input mb-6">
                            <label class="block  text-sm text-gray-500 mb-2" for="username">Username</label>
                            <input v-model="username" type="text" name="email" placeholder="username" id="username"
                                class="border border-gray-300 px-5 py-4 w-[100%] text-sm">
                        </div>
                        <div class="form-input">
                            <label class="block  text-sm text-gray-500 mb-2" for="password">Password</label>
                            <input v-model="password" type="password" name="password" placeholder="*******" id="password"
                                class="border border-gray-300 px-5 py-4 w-[100%] text-sm">
                            <a href="#" class="text-sm mt-2 font-semibold">Forget Your Password ?</a>
                        </div>
                        <div class="form-input my-5">
                            <button @click="clickToLogin"
                                class="w-[100%] p-5 text-lg bg-zinc-900 text-white font-poppins tracking-widest">
                                <span v-if="!loading">SIGN IN</span>
                                <LoaderVue v-else />
                            </button>
                        </div>
                        <div class="form-input mb-5">
                            <button @click="() => router.push('/register')"
                                class="w-[100%] p-5 text-lg bg-zinc-900 text-white font-poppins tracking-widest">CREATE
                                AN
                                ACCOUNT</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div v-else class="flex flex-col my-5 justify-center items-center h-52">
            <span class="text-lg text-black mb-5"> You're Logged in
            </span>
            <button class="block p-4 w-52 text-white bg-zinc-900 my-5" @click="() => router.push('/')">Home</button>
        </div>
    </section>
</template>


<script setup>
import LoginMixin from '../../mixins/LoginMixin';
const { router,
    token,
    username,
    password,
    loading,
    clickToLogin,
    LoaderVue } = LoginMixin()
</script>