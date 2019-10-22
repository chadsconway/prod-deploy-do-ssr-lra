<template>
  <form class="comment-form">
    <!-- region -->
    <label for="region-dropdown">Geographic Region:</label>
    <div class="input-group mt-3 mb-3" id="region-dropdown">
      <button
        type="button"
        class="btn btn-outline-secondary dropdown-toggle"
        data-toggle="dropdown"
      >
        Please select your region:
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">North America</a>
        <a class="dropdown-item" href="#">South America</a>
        <a class="dropdown-item" href="#">Europe</a>
        <a class="dropdown-item" href="#">Africa</a>
        <a class="dropdown-item" href="#">Asia</a>
        <a class="dropdown-item" href="#">Australia</a>
        <a class="dropdown-item" href="#">Antartica</a>
        <a class="dropdown-item" href="#">other</a>
      </div>
    </div>

    <!-- username -->
    <label for="username-field"></label>
    <div class="input-group mb-3" id="username-field">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">@</span>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>

    <!-- first and last name -->
    <label for="first-last-field">Enter Your Name: </label>
    <div class="input-group mb-3" id="first-last-field">
      <div class="input-group-prepend">
        <span class="input-group-text">Person</span>
      </div>
      <input type="text" class="form-control" placeholder="First Name" />
      <input type="text" class="form-control" placeholder="Last Name" />
    </div>

    <!-- Amount to Donate -->
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">$</span>
      </div>
      <input
        type="text"
        class="form-control"
        aria-label="Amount (to the nearest dollar)"
      />
      <div class="input-group-append">
        <span class="input-group-text">.00</span>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      review: null,
      rating: null
    };
  }
};
</script>

<style>
</style>