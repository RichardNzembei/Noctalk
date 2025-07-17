<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">Login</h2>
    <form @submit.prevent="login" class="space-y-4">
      <div>
        <input
          v-model="loginData.username"
          placeholder="Username"
          class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <input
          v-model="loginData.password"
          type="password"
          placeholder="Password"
          class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
      >
        Login
      </button>
      <p v-if="loginError" class="text-red-500 text-sm">{{ loginError }}</p>
    </form>
  </section>
</template>

<script>
import { login } from '~/utils/api';

export default {
  data() {
    return {
      loginData: { username: '', password: '' },
      loginError: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await login(this.loginData);
        this.$emit('login-success', response.data.access_token);
        this.loginData = { username: '', password: '' };
        this.loginError = '';
      } catch (error) {
        this.loginError = error.response?.data?.error || 'Login failed';
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>