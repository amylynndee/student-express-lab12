<template>
    <tr  v-bind:class=" { present: student.present, absent: !student.present }">
        <td>{{ student.name }}</td>
        <td>{{ student.starID }}</td>
        <td><input type="checkbox" v-bind:checked="student.present" v-on:change="arrivedOrLeft(student, $event.target.checked)"></td>
        <td v-show="edit">
            <img v-on:click="deleteStudent" src="@/assets/delete_2.png"></td>
    </tr>
</template>

<script>
export default {
    name: 'StudentRow',
    emits: ['student-arrived-or-left', 'delete-student'], // just added this, compared my code to clara's and this was missing
    props: {
        student: Object,
        edit: Boolean
    },
    methods: {
        arrivedOrLeft(student, present) {
            this.$emit('student-arrived-or-left', student, present)
        },
        deleteStudent() {                                       // changed this from deleteStudent to studentDeleted | changed it back
            if (confirm(`Delete ${this.student.name}?`)) {      // just added this, compared my code to clara's and this was missing
                this.$emit('delete-student', this.student)
          }   
       }
    }                                                          // was missing a curly brace - added this 12/08 - was causing a syntax error
}

</script>

<style scoped>

.present {
    color: gray;
    font-style: italic;
    background-color: aqua;
}

.absent {
    color: white;
    font-weight: bold;
    background-color: rebeccapurple;
}

</style>