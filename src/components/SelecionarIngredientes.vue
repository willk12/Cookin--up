<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul class="categorias">
      <li v-for="categoria in categorias" :key="categoria.id">
        <CardCategoria 
          :categoria="categoria"
          @adicionar-ingrediente="emit('adicionar-ingrediente', $event)"
          @remover-ingrediente="emit('remover-ingrediente', $event)"
        />
      </li>
    </ul>
    <p class="paragrafo dica">
      *Atenção consideramos que você tem em casa sal, pimenta e água.
    </p>

    <BotaoPrincipal texto ='Buscar Receitas!' @click="emit('buscar-receitas')" />
  </section>
</template>

<script setup lang="ts">
import type ICategoria from "@/interfaces/ICategorias";
import { onMounted, ref } from "vue";
import CardCategoria from "./CardCategoria.vue";
import BotaoPrincipal from "./BotaoPrincipal.vue";

const categorias = ref<ICategoria[]>([]);

const emit = defineEmits<{
  (event: 'adicionar-ingrediente', ingrediente: string): void;
  (event: 'remover-ingrediente', ingrediente: string): void;
  (event: 'buscar-receitas'): void;
}>();


async function obterCategorias() {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/categorias.json"
    );
    const data = await response.json();

    categorias.value = data;
  } catch (error) {
    alert("Não foi possivel obter categorias!");
  }
}

onMounted(() => {
  obterCategorias();
});
</script>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3d6d4a);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>
