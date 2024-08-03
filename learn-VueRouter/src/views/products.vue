<template>
  <div>
    <h1>Product</h1>
    <h2>{{ product.name }} - {{ product.price }}</h2>
    <p>Year: {{ product.year }}</p>
  </div>
</template>

<script setup>
import products from "../data/products.json";
import { useRoute } from "vue-router";

const route = useRoute();
const product = products.find((product) => product.id === parseInt(route.params.id))
</script>
