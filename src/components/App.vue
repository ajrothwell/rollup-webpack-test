<template>
  <div>
    <el-button type="primary" icon="el-icon-edit"></el-button>

    <!-- <el-aaa
      :slots="{
        title: 'Address or Intersection Found',
        value: 'test'
      }"
    ></el-aaa> -->

    <badge
      :slots="{
        title: 'Address or Intersection Found',
        value: 'test'
      }"
    ></badge>

    <!-- <button @click="button1Click()">import external link</button>
    <component :is="externalLinkLoader"
               :options="{
                  data: 'openmaps.phila.gov',
                  href: 'https://openmaps.phila.gov'
               }"
    />
    <br><br>

    <button @click="button2Click()">import badge</button>
    <component :is="badgeLoader"
              :slots="{
                title: 'Address or Intersection Found',
                value: 'test'
              }"
    /> -->
    <external-link class="ib"
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

  // import { ExternalLink } from 'rollup_vue_4';
  // import ExternalLink from '../../node_modules/rollup_vue_4/src/components/ExternalLink.vue';
  // import { Badge } from 'rollup_vue_4';

  // import Vue from 'vue';
  // import { ExternalLink } from 'comps_test';
  // import map from 'lodash/map';
  // import ExternalLink from 'comps_test';
  // import * as rollupTest from 'rollup_test';
  // console.log('rollupTest:', rollupTest);
  // import { ExternalLink as Ext } from 'rollup_test';
  // console.log('ExternalLink:', ExternalLink);
  // import ExternalLink from '../../node_modules/comps_test/components/ExternalLink.vue';
  // import { Callout } from 'rollup_test/Callout.vue';
  // import { Badge } from 'comps_test';
  // import Badge from '../../node_modules/comps_test/components/Badge.vue';
  // import Badge from '../../node_modules/rollup_test/src/components/Badge.vue'
  // import Callout from '../../node_modules/rollup_test/src/components/Callout.vue'

  export default {

    components: {
      // ExternalLink: () => import('../../node_modules/rollup_vue_4/src/components/ExternalLink.vue'),
      // ExternalLink,
      // Badge,
      // Callout
    },
    data() {
      const shouldAddComps = {
        addLink: false,
        addBadge: false
      }
      return shouldAddComps;
    },
    // props: {
    //   componentType: {
    //     type: String,
    //     default: () => null
    //   }
    // },
    computed: {
      // externalLinkLoader () {
      //   if (!this.$data.addLink) {
      //     return;
      //   } else {
      //     return () => import('../../node_modules/rollup_vue_3/src/components/ExternalLink.vue').then(console.log('after ExternalLink import'))
      //   }
      // },
      // badgeLoader () {
      //   if (!this.$data.addBadge) {
      //     return;
      //   } else {
      //     return () => import('../../node_modules/rollup_vue_3/src/components/Badge.vue').then(console.log('after Badge import'))
      //   }
      // },

    },
    methods: {
      // button1Click() {
      //   console.log('button1Click, this.$data:', this.$data);
      //   this.$data.addLink = true;
      // },
      // button2Click() {
      //   console.log('button2Click, this.$data:', this.$data);
      //   this.$data.addBadge = true;
      // }
    }
  }

</script>
