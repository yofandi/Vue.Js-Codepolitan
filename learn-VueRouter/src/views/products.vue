<template>
  <div v-if="product">
    <h1>Product</h1>
    <h2>{{ product.name }} - {{ product.price }}</h2>
    <p>Year: {{ product.year }}</p>
  </div>
  <div v-else>
    <h1>product not found</h1>
  </div>
  <button @click="showOwner">Show Owner</button>
  <RouterView />
</template>

<script setup>
import products from "../data/products.json";
import { useRoute, useRouter, RouterView } from "vue-router";

const route = useRoute();
const router = useRouter();
const productId = parseInt(route.params.id);

const product = products.find((product) => product.id === productId);

function showOwner() {
  router.push({
    name: "owner",
    params: { id: productId },
  });
}
</script>
