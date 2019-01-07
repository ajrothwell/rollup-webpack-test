# rollup-webpack-test

This has been used with many rollup vue libraries, to test tree-shaking, including:

rollup-test - https://github.com/ajrothwell/rollup_test

VueLib1 - https://github.com/ajrothwell/VueLib1

Currently it imports the single export from rollup-test (which does not do any chunking).

It then does a dynamic import of ExternalLink.vue, but it has to do it from the node_modules.

Though the dynamic import seems to be working, it is not clear to me yet whether it can fully tree-shake.
