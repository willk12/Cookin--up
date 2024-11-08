<template>
    <button
    class="ingrediente"
    @click=aoClicar()
    :aria-pressed="selecionado"
    >
    <Tag :texto="ingrediente" :ativa="selecionado"/>
    </button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Tag from './Tag.vue';

const props = defineProps({
    ingrediente: String,
});

const emit = defineEmits<{
    (event: 'adcionarIngrediente', ingrediente: string): void;
    
}>();

const selecionado = ref(false)

function aoClicar(){

    selecionado.value = !selecionado.value

    if(selecionado.value){
        emit('adcionarIngrediente', props.ingrediente);
    }

}



</script>

<style scoped>

.ingrediente{
    cursor: pointer;
}

</style>
