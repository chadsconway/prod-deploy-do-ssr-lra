<template>
  <div>
    <div id="site-palette">
      <div class="w3-half">
        <h2>Created Theme</h2>
        <table class="palette">
          <tbody>
            <tr style="height:59px;">
              <td
                id="t1l5"
                style="color: rgb(0, 0, 0); background-color: rgb(235, 255, 255);"
              >
                #ebffff w3-theme-l5
              </td>
            </tr>
            <tr style="height:59px">
              <td
                id="t1l4"
                style="color: rgb(0, 0, 0); background-color: rgb(188, 255, 254);"
              >
                #bcfffe w3-theme-l4
              </td>
            </tr>
            <tr style="height:58px">
              <td
                id="t1l3"
                style="color: rgb(0, 0, 0); background-color: rgb(120, 255, 253);"
              >
                #78fffd w3-theme-l3
              </td>
            </tr>
            <tr style="height:59px">
              <td
                id="t1l2"
                style="color: rgb(0, 0, 0); background-color: rgb(53, 255, 252);"
              >
                #35fffc w3-theme-l2
              </td>
            </tr>
            <tr style="height:58px">
              <td
                id="t1l1"
                style="color: rgb(0, 0, 0); background-color: rgb(0, 241, 237);"
              >
                #00f1ed w3-theme-l1
              </td>
            </tr>
            <tr style="height:59px">
              <td
                id="t1d0"
                style="background-color: rgb(0, 171, 169); color: rgb(255, 255, 255);"
              >
                #00aba9 w3-theme
              </td>
            </tr>
            <tr style="height:58px">
              <td
                id="t1d1"
                style="background-color: rgb(0, 156, 153); color: rgb(255, 255, 255);"
              >
                #009c99 w3-theme-d1
              </td>
            </tr>
            <tr style="height:59px">
              <td
                id="t1d2"
                style="background-color: rgb(0, 139, 136); color: rgb(255, 255, 255);"
              >
                #008b88 w3-theme-d2
              </td>
            </tr>
            <tr style="height:58px">
              <td
                id="t1d3"
                style="background-color: rgb(0, 121, 119); color: rgb(255, 255, 255);"
              >
                #007977 w3-theme-d3
              </td>
            </tr>
            <tr style="height:59px">
              <td
                id="t1d4"
                style="background-color: rgb(0, 104, 102); color: rgb(255, 255, 255);"
              >
                #006866 w3-theme-d4
              </td>
            </tr>
            <tr style="height:58px">
              <td
                id="t1d5"
                style="background-color: rgb(0, 87, 85); color: rgb(255, 255, 255);"
              >
                #005755 w3-theme-d5
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <color-theme />
  </div>
</template>

<script>
import colorTheme from "@/components/color-theme";
export default {
  components: {
    colorTheme
  }
};
</script>

<style>
</style>