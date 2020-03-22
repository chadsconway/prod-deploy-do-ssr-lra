<template>
  <div>
    <!-- <v-img
              src="img/pb/blue-church.jpg"
              width="100%"
              :aspect-ratio="3 / 1"
            ></v-img> -->
    <b-row>
      <b-col class="gradient1 rounded">
        <b-form
          id="signupform"
          @submit.prevent="onSubmit($data)"
          @reset="onReset"
          v-if="show"
        >
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="First Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.firstname"
              required
              placeholder="Enter first name"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Last Name:" label-for="input-2">
            <b-form-input
              v-model="form.lastname"
              required
              placeholder="Enter last name"
            ></b-form-input>
          </b-form-group>
          <b-form inline>
            <label class="mr-sm-2" for="continent-selector"
              >Geographical Region</label
            >
            <b-form-select
              v-model="form.region"
              class="mb-2 mr-sm-2 mb-sm-0"
              :options="region"
              required
              id="continent-selector"
            >
              <template v-slot:first>
                <option :value="null">Choose...</option>
              </template>
            </b-form-select>
          </b-form>

          <b-form-group id="input-group-4">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
              <b-form-checkbox value="join"
                >Please send me information so I may join in praying This Living
                Rosary</b-form-checkbox
              >
            </b-form-checkbox-group>
          </b-form-group>

          <b-form-textarea
            id="note"
            v-model="form.note"
            placeholder="(optional) Write a personalized note..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-col>
    </b-row>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    <b-card class="mt-3" header="Results">
      <pre class="m-0">{{ results }}</pre>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        email: "dave@gmail.com",
        firstname: "Dave",
        lastname: "Davids",
        note: "Hello apostolates",
        checked: ["join"],
        region: "test" //default null
      },
      region: [
        "Africa",
        "Antartica",
        "Asia",
        "Australia",
        "Canada",
        "Caribbean",
        "Europe",
        "Mexico",
        "South America",
        "United States",
        "other",
        "test"
      ],
      show: true,
      testurlechopostbody: "http://localhost:9000/test/echopostbody",
      testurlsend: "http://localhost:9000/test/send",
      results: {}
    };
  },
  methods: {
    onSubmit: function(data) {
      axios
        .post(
          "http://test.thelivingrosaryapostolate.com:9000/test/send",
          data.form
        )
        .then(response => {
          this.results = response.data;
          alert("results: ", this.results);
        })
        .catch(error => {
          this.results = response.data;
          alert("results: ", this.results);
        });
    },
    onReset: function(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.note = "";
      yarn;
      this.form.region = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  asyncData() {}
};
</script>
<style scoped lang="scss">
$w3-theme-l5: #ebffff;
$w3-theme-l4: #bcfffe;
$w3-theme-l3: #78fffd;
$w3-theme-l2: #35fffc;
$w3-theme-l1: #00f1ed;
$w3-theme: #00aba9;
$w3-theme-d1: #009c99;
$w3-theme-d2: #008b88;
$w3-theme-d3: #007977;
$w3-theme-d4: #006866;
$w3-theme-d5: #005755;

.gradient1 {
  color: #fff;
  background-image: linear-gradient(to right, $w3-theme-d3, $w3-theme-d5);
}
</style>