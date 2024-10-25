<template>

    
   <span class="tag">
    {{ texto }}
   </span>
</template>

<script setup lang="ts">
import { ref } from 'vue';




const props = defineProps<{
  texto: string;
}>();

</script>

<style scoped>

.tag{
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--creme, #fffaf3);
  background: var(--coral, #f0633c);
  font-weight: 700;
}


</style>