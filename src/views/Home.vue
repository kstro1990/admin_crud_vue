<template>
  <div>
    <div class="w-full mt-12">
      <p class="text-xl pb-3 flex items-center">
        <i class="fas fa-list mr-3"></i> User List
      </p>
      <px-user-table v-if="!isLoading" :userData="userData" />
    </div>
  </div>
</template>

<script>
import api from "@/api";
import PxUserTable from "@/components/PxUserTable";

export default {
  name: "Home",

  components: { PxUserTable },

  data() {
    return {
      userData: []
    };
  },

  created() {
    api.getUsers().then(userData => (this.userData = userData));
  }
};
</script>
