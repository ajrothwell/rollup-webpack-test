<template>
  <div>
    <external-link class="ib"
                   :options="{
                      data: 'openmaps.phila.gov',
                      href: 'https://openmaps.phila.gov'
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
