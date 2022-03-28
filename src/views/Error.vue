<template>
  <div>
    <h1>{{ `Error - ${statusCode}` }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
defineProps(
  {
    title: String,
    message: String,
    statusCode: Number,
  },
  {
    title: 'Not Found',
    message: "We're sorry, but this page doesn't exist.",
    statusCode: 404,
  },
)
</script>
