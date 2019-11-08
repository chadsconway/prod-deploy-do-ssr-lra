<template>
  <div>
    <div id="site-palette">
      <div class="w3-quarter">
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
      <div class="w3-threequarter">
        <div class="w3-container">
          <div class="row">
            <div id="square"></div>
            <div id="rectangle"></div>
            <div id="circle"></div>
            <div id="oval"></div>
            <div id="triangle-up"></div>
            <div id="triangle-down"></div>
            <div id="triangle-left"></div>
            <div id="triangle-right"></div>
            <div id="trapezoid"></div>
            <div id="star-6-pointed"></div>
            <div id="star-5-pointed"></div>
            <div id="octagon"></div>
            <div id="heart"></div>
            <div id="infinity"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import colorTheme from "@/components/color-theme";
import cardVuetify from "@/components/card-vuetify";
export default {
  components: {
    colorTheme,
    cardVuetify
  }
};
</script>

<style lang="scss">
// $colorThemel5: #ebffff
// $colorThemel4: #bcfffe
// $colorThemel3: #78fffd
// $colorThemel2: #35fffc
// $colorThemel1: #00f1ed
// $colorTheme: #00aba9
// $colorThemed1: #009c99
// $colorThemed2: #008b88
// $colorThemed3: #007977
// $colorThemed4: #006866
// $colorThemed5: #005755

#square {
  width: 100px;
  height: 100px;
  background: red;
}
#rectangle {
  width: 200px;
  height: 100px;
  background: red;
}
#circle {
  width: 100px;
  height: 100px;
  background: red;
  border-radius: 50%;
}
#oval {
  width: 200px;
  height: 100px;
  background: red;
  border-radius: 100px / 50px;
}
#triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
}
#triangle-down {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 100px solid red;
}
#triangle-left {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 100px solid red;
  border-bottom: 50px solid transparent;
}

#triangle-right {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 100px solid red;
  border-bottom: 50px solid transparent;
}
#trapezoid {
  border-bottom: 100px solid red;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  height: 0;
  width: 100px;
}

#star-six {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
  position: relative;
}
#star-six:after {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 100px solid red;
  position: absolute;
  content: "";
  top: 30px;
  left: -50px;
}

#star-five {
  margin: 50px 0;
  position: relative;
  display: block;
  color: red;
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-bottom: 70px solid red;
  border-left: 100px solid transparent;
  transform: rotate(35deg);
}
#star-five:before {
  border-bottom: 80px solid red;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  position: absolute;
  height: 0;
  width: 0;
  top: -45px;
  left: -65px;
  display: block;
  content: "";
  transform: rotate(-35deg);
}
#star-five:after {
  position: absolute;
  display: block;
  color: red;
  top: 3px;
  left: -105px;
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-bottom: 70px solid red;
  border-left: 100px solid transparent;
  transform: rotate(-70deg);
  content: "";
}

#octagon {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
}
#octagon:before {
  content: "";
  width: 100px;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 29px solid red;
  border-left: 29px solid #eee;
  border-right: 29px solid #eee;
}
#octagon:after {
  content: "";
  width: 100px;
  height: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 29px solid red;
  border-left: 29px solid #eee;
  border-right: 29px solid #eee;
}
#heart {
  position: relative;
  width: 100px;
  height: 90px;
}
#heart:before,
#heart:after {
  position: absolute;
  content: "";
  left: 50px;
  top: 0;
  width: 50px;
  height: 80px;
  background: red;
  border-radius: 50px 50px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}
#heart:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}

#infinity {
  position: relative;
  width: 212px;
  height: 100px;
  box-sizing: content-box;
}
#infinity:before,
#infinity:after {
  content: "";
  box-sizing: content-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  border: 20px solid red;
  border-radius: 50px 50px 0 50px;
  transform: rotate(-45deg);
}
#infinity:after {
  left: auto;
  right: 0;
  border-radius: 50px 50px 50px 0;
  transform: rotate(45deg);
}
</style>