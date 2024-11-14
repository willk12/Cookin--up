<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />
    <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'" 
    @adicionar-ingrediente="ingredientes.push($event)"
    @remover-ingrediente="removerIngrediente($event)"
    @buscar-receitas="navegar"
    />
    <MostrarReceitas v-else-if="conteudo === 'MostrarReceitas'"/>
    
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SelecionarIngredientes from "./SelecionarIngredientes.vue";
import Tag from "./Tag.vue";
import SuaLista from "./suaLista.vue";
import MostrarReceitas from "./MostrarReceitas.vue";

type Pagina = "SelecionarIngredientes" | "MostrarReceitas";

const ingredientes = ref<string[]>([]);
const conteudo = ref<Pagina>('SelecionarIngredientes');

function removerIngrediente(ingrediente: string) {
  ingredientes.value = ingredientes.value.filter(item => item !== ingrediente);
}

function navegar(pagina: Pagina){

  conteudo.value = 'MostrarReceitas'
}


function buscarReceitas(){
  alert('clicado!')
}
</script>

<style scoped>




.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
