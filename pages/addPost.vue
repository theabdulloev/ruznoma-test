<template>
    <div class="p-4">
      <h1 class="text-xl font-bold mb-4">Add Data to MongoDB</h1>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="name" class="block font-semibold">Name:</label>
          <input type="text" id="name" v-model="formData.name" class="border border-gray-300 px-4 py-2 rounded-lg w-full">
        </div>
        <div>
          <label for="username" class="block font-semibold">Username:</label>
          <input type="text" id="username" v-model="formData.username" class="border border-gray-300 px-4 py-2 rounded-lg w-full">
        </div>
        <div>
          <label for="email" class="block font-semibold">Email:</label>
          <input type="email" id="email" v-model="formData.email" class="border border-gray-300 px-4 py-2 rounded-lg w-full">
        </div>
        <div>
          <label for="phone" class="block font-semibold">Phone:</label>
          <input type="text" id="phone" v-model="formData.phone" class="border border-gray-300 px-4 py-2 rounded-lg w-full">
        </div>
        <div>
          <label for="company" class="block font-semibold">Company Name:</label>
          <input type="text" id="company" v-model="formData.company.name" class="border border-gray-300 px-4 py-2 rounded-lg w-full">
        </div>
        <div>
          <label for="website" class="block font-semibold">Website:</label>
          <input type="text" id="website" v-model="formData.website" class="border border-gray-300 px-4 py-2 rounded-lg w-full">
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        formData: {
          name: '',
          username: '',
          email: '',
          phone: '',
          website: '',
          company: {
            name: ''
          },
        },
      };
    },
    methods: {
      async handleSubmit(event) {
        try {
          const result = await axios.post('/api/addPost', this.formData);
          console.log(result)
          this.formData = { ...this.formData }
        } catch (error) {
          console.error(error);
          alert('Error adding data to MongoDB.');
        }
      },
    },
  };
  </script>
  