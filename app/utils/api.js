export async function signup(data) {
  return await this.$axios.post('/api/signup', data);
}

export async function login(data) {
  return await this.$axios.post('/api/login', data);
}

export async function sendBulkSMS(data) {
  return await this.$axios.post('/api/send_bulk_sms', data);
}

export async function getMessageHistory() {
  return await this.$axios.get('/api/message_history');
}