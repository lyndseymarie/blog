<template>
<v-app>
  <div class="entire-body">
    <site-header/>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
  </v-app>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
// import EmployeeTable from '@/components/EmployeeTable.vue'
// import EmployeeForm from '@/components/EmployeeForm.vue'
import SiteHeader from '@/components/SiteHeader.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // EmployeeTable,
    // EmployeeForm,
    SiteHeader
  },
  data () {
    return {
      // employees: [
      //   {
      //     id: 1,
      //     name: 'Daniel Hendricks',
      //     email: 'richard@piedpiper.com',
      //   },{
      //     id: 2,
      //     name: 'Bertram Gilfoyle',
      //     email: 'gilfoyle@piedpiper.com',
      //   },{
      //     id: 3,
      //     name: 'Dinesh Chugtai',
      //     email: 'dinesh@piedpiper.com',
      //   },
      // ],
    }
  },
  methods: {
    addEmployee(employee) {
      this.employees = [...this.employees, employee]
    }
  }
}
</script>

<style>
.entire-body {
  height: 3000px;
  background: linear-gradient(white 5%, #ffe6e6 80%);
  margin-top: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
button {
  background: #009435;
  border: 1px solid #009435;
}

.small-container {
  max-width: 980px;
  border: 1px solid black;
}

</style>
