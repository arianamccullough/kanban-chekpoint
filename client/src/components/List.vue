<template>
  <div class="List card m-2">
    <h4><b>{{list.title}} </b><i @click="deleteList" class="fas fa-trash-alt"></i></h4>
    <p><i>{{list.desc}}</i></p>
    <form @submit.prevent="addTask" class="form-group">
      <input v-model="newTask.desc" type="text" placeholder="Task to do..." name="desc" />
      <button type="submit"><i class="fas fa-plus fas-3x"></i></button>
    </form>
    <div v-for="taskData in tasks">
      <task :task="taskData"></task>
    </div>



  </div>
</template>

<script>
  import Task from '@/components/Task.vue'
  export default {
    name: 'List',
    data() {
      return {
        newTask: {
          desc: '',
          listId: ''
        }
      }
    },
    mounted() {
      this.$store.dispatch('getTasks', this.list._id)
    },
    computed: {
      tasks() {
        return this.$store.state.tasks[this.list._id] || []
      }
    },
    props: ['list'],
    components: {
      Task
    },
    methods: {
      deleteList() {
        this.$store.dispatch('deleteList', this.list)
      },
      addTask() {
        this.newTask.listId = this.list._id
        this.$store.dispatch('addTask', this.newTask)
      }
    }
  }
</script>

<style scoped>
  .List {
    background-color: rgb(40, 113, 191);
  }
</style>