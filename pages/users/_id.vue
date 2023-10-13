<template>
  <div class="min-h-screen bg-gradient-to-br from-teal-400 to-teal-600">
    <div class="container mx-auto py-10">
      <h1 class="text-white text-4xl font-bold mb-6">{{ pageTitle }}</h1>
        <div>
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
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  
  // validate ({ params }) {
  //   return /^\d+$/.test(params.id)
  // },
  // async asyncData({ $axios, params }) {
  //   const user = await $axios.$get('/api/getUsers/' + params.id)
  //   return { user }
  // },
  data () {
    return {
      pageTitle: 'User page',
      user: {
    name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  company: {
    name: ""
  }
}
    }
  },
  methods: {
    async getUser(){
      const params = {id: this.$route.params.id};
      const users = await axios.get('/api/getUsers/' + params.id)
      console.log(users.data)
      this.user = users.data
    }
  },
  mounted() {
    this.getUser()
  },
}
</script>

<!--  -->