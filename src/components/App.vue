<template>
  <div>
    <button @click="test()">Button</button>
    <!-- <external-link class="ib" -->
    <component :is="componentLoader"
               :options="{
                  data: 'openmaps.phila.gov',
                  href: 'https://openmaps.phila.gov'
               }"
    />
    <!-- v-if="false" -->

    <!-- <badge
      :slots="{
        title: 'Address or Intersection Found',
        value: 'test'
      }"
    /> -->

    <!-- <callout
      :slots="{
        text: 'Address or Intersection Found',
      }"
    /> -->

  </div>
</template>

<script>
  // import Vue from 'vue';
  // import { ExternalLink } from 'comps_test';
  // import map from 'lodash/map';
  // import ExternalLink from 'comps_test';
  // import * as rollupTest from 'rollup_test';
  // console.log('rollupTest:', rollupTest);
  // import { ExternalLink as Ext } from 'rollup_test';
  // console.log('ExternalLink:', ExternalLink);
  // import { ExternalLink } from 'rollup_test/ExternalLink.vue';
  // import ExternalLink from '../../node_modules/comps_test/components/ExternalLink.vue';
  // import ExternalLink from '../../node_modules/rollup_test/src/components/ExternalLink.vue';
  // import { Badge } from 'rollup_test';
  // import { Callout } from 'rollup_test/Callout.vue';
  // import { Badge } from 'comps_test';
  // import Badge from '../../node_modules/comps_test/components/Badge.vue';
  // import Badge from '../../node_modules/rollup_test/src/components/Badge.vue'
  // import Callout from '../../node_modules/rollup_test/src/components/Callout.vue'

  export default {

    components: {
      // ExternalLink: () => import('../../node_modules/rollup_test/src/components/ExternalLink.vue'),
      // ExternalLink,
      // Badge,
      // Callout
    },
    data() {
      const test = {
        useLink: false
      }
      return test;
    },
    // props: {
    //   componentType: {
    //     type: String,
    //     default: () => null
    //   }
    // },
    computed: {
      componentLoader () {
        if (!this.$data.useLink) {
          return;
        } else {
          // console.log('else')
          return () => import('../../node_modules/rollup_vue_3/src/components/ExternalLink.vue').then(console.log('after import'))
        }
      }
    },
    methods: {
      test() {
        // console.log('test, this.$data:', this.$data);
        this.$data.useLink = true;
      }
    }
  }

</script>
