<template>
    <v-card flat tile >
        <v-container>
            <v-card-text>{{ homeText }}</v-card-text>
            <employee-table v-bind:employees = "employees"/>
        </v-container>
    </v-card>

</template>

<script>
import EmployeeTable from '@/components/EmployeeTable.vue'

export default {
    name: 'home-page-content',
    // props: {},
    components: {
        EmployeeTable,
    },
    data: () => ({
        homeText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        employees: [
            {
                id: 1,
                name: 'Daniel Hendricks',
                email: 'richard@piedpiper.com',
            },{
                id: 2,
                name: 'Bertram Gilfoyle',
                email: 'gilfoyle@piedpiper.com',
            },{
                id: 3,
                name: 'Dinesh Chugtai',
                email: 'dinesh@piedpiper.com',
            },
        ],
    }),
}
</script>

<style scoped></style>