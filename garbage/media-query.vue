<template> </template>

<script>
export default {

computed: {
mediaQueryList: window.matchMedia("(orientation: portrait)"); // Create the query list.
function handleOrientationChange(mql) { ... } // Define a callback function for the event listener.
mediaQueryList.addListener(handleOrientationChange); // Add the callback function as a listener to the query list.

handleOrientationChange(mediaQueryList); // Run the orientation change handler once.
}
};

</script>
<style>
</style>