<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">Sign Up</h2>
    <form @submit.prevent="signup" class="space-y-4">
      <div>
        <input
          v-model="signupData.username"
          placeholder="Username"
          class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <input
          v-model="signupData.password"
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
        Sign Up
      </button>
      <p v-if="signupError" class="text-red-500 text-sm">{{ signupError }}</p>
    </form>
  </section>
</template>

<script>
import { signup } from '~/utils/api';

export default {
  data() {
    return {
      signupData: { username: '', password: '' },
      signupError: '',
    };
  },
  methods: {
    async signup() {
      try {
        await signup(this.signupData);
        this.$emit('signup-success');
        this.signupData = { username: '', password: '' };
        this.signupError = '';
        alert('User created successfully!');
      } catch (error) {
        this.signupError = error.response?.data?.error || 'Signup failed';
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