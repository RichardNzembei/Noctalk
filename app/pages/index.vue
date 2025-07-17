<template>
  <div class="container mx-auto p-6 max-w-2xl">
    <h1 class="text-3xl font-bold mb-6 text-center">Messaging System</h1>

    <div v-if="!token" class="space-y-8">
      <Signup @signup-success="resetErrors" />
      <Login @login-success="handleLogin" />
    </div>
    <div v-else class="space-y-8">
      <SendSMS @sms-sent="loadMessageHistory" />
      <MessageHistory :messages="messages" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: null,
      messages: [],
    };
  },
  methods: {
    handleLogin(token) {
      this.token = token;
      this.$axios.setToken(token, 'Bearer');
      this.loadMessageHistory();
    },
    async loadMessageHistory() {
      try {
        const response = await this.$axios.get('/api/message_history');
        this.messages = response.data;
      } catch (error) {
        console.error('Failed to load message history:', error);
      }
    },
    resetErrors() {
      // Reset any global error states if needed
    },
  },
};
</script>