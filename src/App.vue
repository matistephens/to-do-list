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
            <button type="submit" class=" btn btn-outline-secondary">Agregar</button>
          </div>
        </div>
      </form>
      <h4 class="text-secondary mt-4">Lista</h4>
      <ul class="list-group">
        <li v-for="(tarea, $index) in tareas" :key="$index" class="list-group-item">{{ $index + 1 }}. {{ tarea }}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    nuevaTarea: "",
    tareas: [
      "Primera tarea",
      "Segunda tarea"

    ]
  }),
  methods: {
    agregarNuevaTarea(){
      this.tareas.unshift(this.nuevaTarea)
      
    }
  }
}

</script>

<style>
</style>
