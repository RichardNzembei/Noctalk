<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 class="text-2xl font-bold text-center mb-6">Messaging System</h1>
      <p class="text-center">
        Welcome! 
        <NuxtLink to="/signup" class="text-blue-600 hover:underline">Sign Up</NuxtLink> or 
        <NuxtLink to="/login" class="text-blue-600 hover:underline">Log In</NuxtLink>
      </p>
      <div v-if="isLoggedIn" class="mt-4 text-center">
        <NuxtLink to="/send-sms" class="text-blue-600 hover:underline">Send SMS</NuxtLink> | 
        <button @click="logout" class="text-red-600 hover:underline">Logout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'

const config = useRuntimeConfig()
const isLoggedIn = ref(false)

onMounted(async () => {
  try {
    await axios.get(`${config.public.apiBase}/check-session.php`, { withCredentials: true })
    isLoggedIn.value = true
  } catch (error) {
    isLoggedIn.value = false
  }
})

async function logout() {
  try {
    await axios.get(`${config.public.apiBase}/logout.php`, { withCredentials: true })
    isLoggedIn.value = false
    navigateTo('/login')
  } catch (error) {
    console.error('Logout failed')
  }
}
</script>