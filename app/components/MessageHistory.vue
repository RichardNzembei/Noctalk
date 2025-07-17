<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">Message History</h2>
    <div v-if="messages.length === 0" class="text-gray-500">
      No messages sent yet.
    </div>
    <div v-else class="space-y-4">
      <div
        v-for="msg in messages"
        :key="msg.id"
        class="p-4 border rounded-md bg-gray-50"
      >
        <p><strong>Recipients:</strong> {{ msg.recipients }}</p>
        <p><strong>Message:</strong> {{ msg.content }}</p>
        <p><strong>Sent:</strong> {{ formatDate(msg.sent_at) }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString();
    },
  },
};
</script>