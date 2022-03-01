<template>
  <h1>Employees</h1>
  <div v-for="employee in employees" :key="employee.id">
    <router-link :to="{ name: 'EmployeeDetail', params: { id: employee.id } }">
      <p>{{ employee.name }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        {
          id: 1,
          name: "John Doe",
          role: "CEO",
        },
        {
          id: 2,
          name: "Jenny Smith",
          role: "CFO",
        },
        {
          id: 3,
          name: "William Johnson",
          role: "CTO",
        },
      ],
    };
  },
};
</script>

<style></style>
