<template>
<div class="container">
  <div class="row">
    <div class="col-sm-6 mx-auto text-center">
      <h4 class="text-secondary mt-4">Todo List</h4>
      <form class="mt-4" @submit.prevent="agregarNuevaTarea">
        <div class="form-group row">
          <div class="col-9">
            <input v-model="nuevaTarea" type="text" class="form-control" placeholder="Ingresa una nueva tarea" required>
          </div>
          <div class="col-2">
            <button type="submit" class="btn btn-outline-secondary">Agregar</button>
          </div>
        </div>
      </form>
      <h4 class="text-secondary mt-4">Lista tareas</h4>
      <ul class="list-group">
        <TareaLista @tareaCompletada="borrarTarea($event)" v-for="(tarea, $index) in tareas" :key="$index" :elementoListado="tarea" :indexTarea="$index"/>

      </ul>
    </div>
  </div>
</div>
</template>

<script>
import TareaLista from "@/components/TareaLista.vue"

export default {
  name: 'App',
  data: () => ({
    nuevaTarea: "",
    tareas: [],
  }),
  components: {
    TareaLista
  },
  methods: {
    agregarNuevaTarea(){
      this.tareas.unshift(this.nuevaTarea)
      this.nuevaTarea=""      
    },
    borrarTarea(key) {
      this.tareas.splice(key, 1)
    }
  }
}

</script>

<style>
.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
