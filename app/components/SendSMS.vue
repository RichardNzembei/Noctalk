<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">Send Bulk SMS</h2>
    <form @submit.prevent="sendSMS" class="space-y-4">
      <div>
        <input
          v-model="smsData.recipients"
          placeholder="Enter phone numbers (comma-separated)"
          class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <textarea
          v-model="smsData.content"
          placeholder="Enter your message"
          class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
      >
        Send SMS
      </button>
      <p v-if="smsError" class="text-red-500 text-sm">{{ smsError }}</p>
    </form>
  </section>
</template>

<script>
import { sendBulkSMS } from '~/utils/api';

export default {
  data() {
    return {
      smsData: { recipients: '', content: '' },
      smsError: '',
    };
  },
  methods: {
    async sendSMS() {
      try {
        await sendBulkSMS(this.smsData);
        this.$emit('sms-sent');
        this.smsData = { recipients: '', content: '' };
        this.smsError = '';
        alert('SMS sent successfully!');
      } catch (error) {
        this.smsError = error.response?.data?.error || 'Failed to send SMS';
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