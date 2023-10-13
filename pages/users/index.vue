<template>
  <div class="min-h-screen bg-gradient-to-br from-teal-400 to-teal-600">
    <div class="container mx-auto py-10">
      <h1 class="text-white text-4xl font-bold mb-6">{{ pageTitle }}</h1>
      <ul class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="user in users" :key="user._id" @click.prevent="goTo(user)">
          <div class="bg-white rounded-lg shadow-xl p-8">
            <h2 class="text-xl font-semibold mb-2">{{ user.name }}</h2>
            <p class="text-gray-600">
              <strong>Email:</strong> {{ user.email }}
            </p>
            <p class="text-gray-600">
              <strong>Username:</strong> {{ user.username }}
            </p>
            <p class="text-gray-600">
              <strong>Phone:</strong> {{ user.phone }}
            </p>
            <p class="text-gray-600">
              <strong>Website:</strong> {{ user.website }}
            </p>
            <p class="text-gray-600">
              <strong>Company:</strong> {{ user.company.name }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  loading: true,
  data () {
    return {
      pageTitle: 'All Users',
      users: []
    }
  },
  methods: {
    async getUsers(){
      const users = await axios.get('/api/getUsers')
      this.users = users.data
    },
    goTo (user) {
      this.$router.push('/users/' + user.id)
    }
  },
  mounted() {
    this.getUsers()
  },

}
</script>

