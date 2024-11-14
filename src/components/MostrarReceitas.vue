<template>
    <div class="conteudo-principal">
        <h2 class="titulo">Receitas</h2>

    <p class="paragrafo">resultados encontrados: {{receitas.length}}</p>
    <p >Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!</p>
    </div>

    <div v-if="receitas.length > 0">

<div class="container">
    <div class="bloco" v-for="receita in receitas" :key="receita">

<img :src="`/public/imagens/receitas/${receita.imagem}`" alt="">
<p>{{receita.nome}}</p>

</div>
</div>
</div>

<div v-else>
    <img src="../assets/sem-receitas.png" alt="Not found more Foods :(">
</div>

    <BotaoEdit  texto="Editar lista"/>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BotaoEdit from './BotaoEdit.vue';

const MostrarReceitas = ref(false)
const receitas = ref([])

async function puxarReceitas() {
   try {

    const response = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');

const data = await response.json();

receitas.value = data;


    
   } catch (error) {

    alert(error)
    
   }
    
}

onMounted(()=>{
    puxarReceitas();

})

</script>

<style scoped>

.conteudo-principal {

  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;

}

.titulo{
    color: var(--verde-medio);
    font-size: 40px;
    font-weight: bold;
}

.paragrafo{
    color: var(--verde-medio); 
}

.container{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;
    justify-content: center;

    
}

.bloco{
    background-color: #fff;
    box-shadow: 2px 2px 2px 2px #dadada;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    overflow: hidden;
    width: 20%;
    max-height: 400px;
    cursor: pointer;
    
}

.bloco img{
    width: 100%;
    height: 70%;
}


.bloco p{
    padding: 15px 0;
    font-weight: bold;
}

</style>