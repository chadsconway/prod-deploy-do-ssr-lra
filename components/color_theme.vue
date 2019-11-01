<template>
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

    <div class="w3-half">
      <h2>Theme In Use:</h2>

      <div class="w3-border">
        <div
          id="mt1-top"
          class="w3-container w3-padding-small"
          style="background: rgb(0, 121, 119) none repeat scroll 0% 0%; color: rgb(255, 255, 255);"
        >
          <div class="w3-right">
            <i class="fa fa-cube"></i>
            <i class="fa fa-sort"></i>
            <i class="fa fa-trash"></i>
            12:30
          </div>
        </div>
        <header
          id="mt1-header"
          class="w3-container"
          style="background: rgb(0, 171, 169) none repeat scroll 0% 0%; color: rgb(255, 255, 255);"
        >
          <h2>Movies</h2>
        </header>
        <div
          id="mt1-back"
          class="w3-container w3-padding-16"
          style="position: relative; min-height: 465px; background: rgb(235, 255, 255) none repeat scroll 0% 0%;"
        >
          <a
            id="mt1-action"
            class="w3-button w3-xlarge w3-circle w3-right"
            style="position: absolute; top: -30px; right: 16px; background: rgb(0, 87, 85) none repeat scroll 0% 0%; color: rgb(255, 255, 255);"
            >+</a
          >
          <div class="w3-row">
            <div class="w3-col" style="width:100px">
              <img class="w3-circle" src="img_avatar.jpg" alt="avatar" />
            </div>
            <div class="w3-rest w3-container">
              <h3 id="mt1-h1" style="color: rgb(0, 171, 169);">Frozen</h3>
              <p>The response to the animations was ridiculous.</p>
            </div>
          </div>
          <hr />
          <div class="w3-row">
            <div
              id="mt1-graphic"
              class="w3-col"
              style="width: 100px; color: rgb(0, 171, 169);"
            >
              <i class="fa fa-rebel" style="font-size:96px;"></i>
            </div>
            <div class="w3-rest w3-container">
              <h3 id="mt1-h2" style="color: rgb(0, 171, 169);">Star Wars</h3>
              <p>People were excited for the new Star Wars movie.</p>
            </div>
          </div>
          <hr />
          <div class="w3-row">
            <div class="w3-col" style="width:100px">
              <img class="w3-circle" src="img_avatar.jpg" alt="avatar" />
            </div>
            <div class="w3-rest w3-container">
              <h3 id="mt1-h3" style="color: rgb(0, 171, 169);">The Avengers</h3>
              <p>A huge success for Marvel and Disney.</p>
            </div>
          </div>
        </div>
        <div
          id="mt1-footer"
          class="w3-container"
          style="background: rgb(0, 171, 169) none repeat scroll 0% 0%; color: rgb(255, 255, 255);"
        >
          <p>W3Schools 2016</p>
        </div>
        <div
          id="mt1-bottom"
          class="w3-container w3-xlarge"
          style="background: rgb(0, 87, 85) none repeat scroll 0% 0%; color: rgb(255, 255, 255);"
        >
          «<span class="w3-right">»</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.w3-theme-l5 {
  color: #000 !important;
  background-color: #ebffff !important;
}
.w3-theme-l4 {
  color: #000 !important;
  background-color: #bcfffe !important;
}
.w3-theme-l3 {
  color: #000 !important;
  background-color: #78fffd !important;
}
.w3-theme-l2 {
  color: #000 !important;
  background-color: #35fffc !important;
}
.w3-theme-l1 {
  color: #000 !important;
  background-color: #00f1ed !important;
}
.w3-theme-d1 {
  color: #fff !important;
  background-color: #009c99 !important;
}
.w3-theme-d2 {
  color: #fff !important;
  background-color: #008b88 !important;
}
.w3-theme-d3 {
  color: #fff !important;
  background-color: #007977 !important;
}
.w3-theme-d4 {
  color: #fff !important;
  background-color: #006866 !important;
}
.w3-theme-d5 {
  color: #fff !important;
  background-color: #005755 !important;
}

.w3-theme-light {
  color: #000 !important;
  background-color: #ebffff !important;
}
.w3-theme-dark {
  color: #fff !important;
  background-color: #005755 !important;
}
.w3-theme-action {
  color: #fff !important;
  background-color: #005755 !important;
}

.w3-theme {
  color: #fff !important;
  background-color: #00aba9 !important;
}
.w3-text-theme {
  color: #00aba9 !important;
}
.w3-border-theme {
  border-color: #00aba9 !important;
}

.w3-hover-theme:hover {
  color: #fff !important;
  background-color: #00aba9 !important;
}
.w3-hover-text-theme:hover {
  color: #00aba9 !important;
}
.w3-hover-border-theme:hover {
  border-color: #00aba9 !important;
}
</style>