<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 class="text-2xl font-bold text-center mb-6">Log In</h1>
      <form @submit.prevent="login" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
          class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
          class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Log In
        </button>
      </form>
      <p v-if="response" :class="{ 'text-red-600': response.error, 'text-green-600': !response.error }" class="mt-4 text-center">
        {{ response.message || response.error }}
      </p>
      <p class="mt-4 text-center">
        <NuxtLink to="/signup" class="text-blue-600 hover:underline">Need an account? Sign Up</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'

const config = useRuntimeConfig()
const email = ref('')
const password = ref('')
const response = ref(null)

async function login() {
  try {
    const res = await axios.post(`${config.public.apiBase}/login.php`, {
      email: email.value,
      password: password.value
    }, { withCredentials: true })
    response.value = res.data
    if (res.data.success) {
      navigateTo('/send-sms')
    }
  } catch (error) {
    response.value = error.response?.data || { error: 'Login failed' }
  }
}
</script>