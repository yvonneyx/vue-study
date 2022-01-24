<template>
  <div>
    {{ fullname }}
    <div>
      firstname:
      <input v-model="firstname" />
    </div>
    <div>
      lastname:
      <input v-model="lastname" />
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      firstname: "Foo",
      lastname: "Bar",
      fullname: "Foo Bar"
    };
  },
  computed: {
    fullname: function() {
      return this.firstname + " " + this.lastname;
    }
  },
  watch: {
    firstname: function(val) {
      this.fullname = val + " " + this.lastname;
    },
    lastname: function(val) {
      this.fullname = this.lastname + " " + val;
    }
  }
};
</script>

<style></style>
