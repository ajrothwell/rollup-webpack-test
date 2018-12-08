<template>
  <div>
    <external-link
      :options="{
        text: 'test'
      }"
    />

    <!-- <badge
      :slots="{
        title: 'Address or Intersection Found',
        value: 'test'
      }"
    /> -->
  </div>
</template>

<script>

  // import { Badge } from 'rollup-test';
  import { ExternalLink } from 'rollup-test';

  export default {
    components: {
      // Badge,
      ExternalLink,
    }
  }

</script>
