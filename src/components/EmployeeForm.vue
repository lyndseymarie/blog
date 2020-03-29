<template>
    <div id="employee-form">
        <form @submit.prevent="handleSubmit">
            <label>Name</label>
            <input v-model="employee.name" type = "text"/>
            <label>Email</label>
            <input v-model="employee.email" type = "text"/>
            <button>Add Employee</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'employee-form',
    data() {
        return {
            employee: {
                name: '',
                email: '',
            }
        }
    },
    methods: {
        handleSubmit() {
            console.log("testing handleSubmit method")
            this.$emit("add:employee", this.employee)
        }
    }
  }
</script>

<style scoped>
form {
    margin-bottom: 2rem;
}
</style>