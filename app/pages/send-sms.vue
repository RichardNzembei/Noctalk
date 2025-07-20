<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 class="text-2xl font-bold text-center mb-6">Send Bulk SMS</h1>
      <form @submit.prevent="sendSMS" class="space-y-4">
        <textarea
          v-model="message"
          placeholder="Enter message"
          required
          class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <input
          v-model="recipients"
          placeholder="Phone numbers (comma-separated)"
          required
          class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
      <p v-if="response" :class="{ 'text-red-600': response.error, 'text-green-600': !response.error }" class="mt-4 text-center">
        {{ response.message || response.error }}
      </p>
      <p class="mt-4 text-center">
        <NuxtLink to="/" class="text-blue-600 hover:underline">Home</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'

const config = useRuntimeConfig()
const message = ref('')
const recipients = ref('')
const response = ref(null)

onMounted(async () => {
  try {
    await axios.get(`${config.public.apiBase}/check-session.php`, { withCredentials: true })
  } catch (error) {
    navigateTo('/login')
  }
})

async function sendSMS() {
  try {
    const res = await axios.post(`${config.public.apiBase}/send-sms.php`, {
      message: message.value,
      recipients: recipients.value.split(',').map(num => num.trim())
    }, { withCredentials: true })
    response.value = res.data
  } catch (error) {
    response.value = error.response?.data || { error: 'Error sending SMS' }
  }
}
</script>