<template>
    <li class="task">
        {{ elementoListado }}
        <button @click="eliminarTarea" type="button" class="btn btn-outline-success">Completar</button>
    </li>
</template>

<script>
export default {
    name: 'TareaLista',
    props: {
        elementoListado: String,
        indexTarea: Number,
    },
    methods: {
        eliminarTarea(){
            this.$emit("tareaCompletada", this.indexTarea)
        },
    }

}
</script>

<style>

</style>