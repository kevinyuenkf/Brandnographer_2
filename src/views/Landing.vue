<template>
  <div class="main-container">
    <h1>{{ $t('landing.title') }}</h1>
    <BoldLine
        id="h1-boldline"
        :options="{
        color: this.$vuetify.theme.themes.light.secondary,
        height: '6px',
        width: '45px',
      }"
        class="hidden-md-and-down"
    ></BoldLine>
    <BoldLine
        id="h1-boldline"
        :options="{
        color: this.$vuetify.theme.themes.light.secondary,
        height: '4px',
        width: '30px',
      }"
        class="hidden-lg-and-up"
    ></BoldLine>
    <div class="part-1">
      <div><h2>1. {{ $t('landing.step_1.title') }}</h2></div>
      <div>
        <v-btn-toggle v-model="partOne.selected" group tile>
          <v-btn v-on:click="scrollToElement('part-2-before')">
            <div class="btn-slot">
              <div class="tick-cir-div d-flex flex-row-reverse">
                <img
                    v-if="partOne.selected === 0"
                    src="../assets/cir_tick.svg"
                />
              </div>
              <img class="mb-4 mt-2" src="../assets/landing_application.svg"/>
              <h3>{{ $t('applications') }}</h3>
            </div>
          </v-btn>
          <v-btn v-on:click="scrollToElement('part-2-before')">
            <div class="btn-slot">
              <div class="tick-cir-div d-flex flex-row-reverse">
                <img
                    v-if="partOne.selected === 1"
                    src="../assets/cir_tick.svg"
                />
              </div>
              <img class="mb-4 mt-2" src="../assets/landing_renewal.svg"/>
              <h3>{{ $t('renewal') }}</h3>
            </div>
          </v-btn>
          <v-btn v-on:click="scrollToElement('part-2-before')">
            <div class="btn-slot">
              <div class="tick-cir-div d-flex flex-row-reverse">
                <img
                    v-if="partOne.selected === 2"
                    src="../assets/cir_tick.svg"
                />
              </div>
              <img class="mb-4 mt-2" src="../assets/landing_followup.svg"/>
              <h3>{{ $t('follow_up') }}</h3>
            </div>
          </v-btn>
        </v-btn-toggle>
      </div>
      <div class="part-2-before"></div>
    </div>
    <!-- Application -->
    <div v-if="partOne.selected === 0" class="part-2">
      <div><h2>2. {{ $t('landing.step_2.title') }}</h2></div>
      <div>
        <v-btn-toggle v-model="partTwo[partOne.selected].selected" group tile>
          <template v-for="(item, i) in partTwoButtons[partOne.selected]">
            <v-btn
                :key="i"
                v-on:click="
                (i !== 2 && i !== 3)
                ? scrollToElement('part-3-before')
                : ''">
              <div class="btn-slot">
                <h3>{{ item }}</h3>
                <!--<v-spacer></v-spacer>-->
                <img
                    v-if="partTwo[partOne.selected].selected === i"
                    src="../assets/cir_tick.svg"
                />
              </div>
            </v-btn>
            <div v-if="i === 2 && partOne.selected === 0 &&
            !(partTwo[partOne.selected].selected === undefined) &&
            partTwo[partOne.selected].selected === 2 &&
            partThreeButtons[partOne.selected][partTwo[partOne.selected].selected].length > 0" class="form-type-reminder">
              Reminder: New Application for Nomination of Reserve Licensee can only be applied with application for new issue/ renewal/ transfer of liquor licence/ club liquor licence.
            </div>
            <div v-if="i === 3 && partOne.selected === 0 &&
            !(partTwo[partOne.selected].selected === undefined) &&
            partTwo[partOne.selected].selected === 3 &&
            partThreeButtons[partOne.selected][partTwo[partOne.selected].selected].length > 0" class="form-type-reminder">
              Reminder: You may fill in the Authorisation form after the nomination has been approved.
            </div>
          </template>
        </v-btn-toggle>
      </div>
      <div class="part-3-before"></div>
    </div>
    <!-- Renewal -->
    <div v-if="partOne.selected === 1" class="part-3">
      <div><h2>2. {{ $t('landing.step_2.title') }}</h2></div>
      <div>
        <v-btn-toggle v-model="partTwo[partOne.selected].selected" group tile>
          <v-btn
              v-for="(item, i) in partTwoButtons[partOne.selected]"
              :key="i"
          >
            <div class="btn-slot">
              <h3>{{ item }}</h3>
              <img
                  v-if="partTwo[partOne.selected].selected == i"
                  src="../assets/cir_tick.svg"
              />
            </div>
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>
    <!-- Application / New Licnce -->
    <div v-if="
        partOne.selected === 0 &&
        !(partTwo[partOne.selected].selected === undefined) &&
        partTwo[partOne.selected].selected !== 2 &&
        partTwo[partOne.selected].selected !== 3 &&
        partThreeButtons[partOne.selected][partTwo[partOne.selected].selected].length > 0
      "
         class="part-3"
    >
      <div>
        <h2>3. {{ $t('landing.step_3.title') }}</h2>
      </div>
      <div>
        <v-btn-toggle
            v-model="
            partThree[partOne.selected][partTwo[partOne.selected].selected]
              .selected
          "
            group
            tile
        >
          <v-btn
              v-for="(item, i) in partThreeButtons[partOne.selected][
              partTwo[partOne.selected].selected
            ]"
              :key="i"
          >
            <div class="btn-slot">
              <h3>{{ item }}</h3>
              <img
                  v-if="
                  partThree[partOne.selected][
                    partTwo[partOne.selected].selected
                  ].selected == i
                "
                  src="../assets/cir_tick.svg"
              />
            </div>
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>
    <!-- Apply -->
    <div v-if="checkShouldShowApply()" class="part-4">
      <v-btn
          class="apply-btn rounded-pill"
          color="primary"
          depressed
          @click="tryRouteTo()"
      >{{ $t('apply') }}
      </v-btn
      >
    </div>
  </div>
</template>

<script>
import BoldLine from "../components/misc/bold-line";
// @ is an alias to /src

export default {
  name: "Landing",
  components: {
    BoldLine,
  },
  computed: {
    partOneButtons() {
      return [
        this.$t('applications'),
        this.$t('renewal'),
        this.$t('follow_up'),
      ]
    },
    partTwoButtons() {
      return [
        [
          this.$t('new_licence'),
          this.$t('licence_transfer'),
          this.$t('application_to_nomination_of_reserve_licensee'),
          this.$t("downloadForm.content_22"),
          this.$t('temporary_absence'),
          this.$t('licence_amendment'),
          this.$t('change_information'),
        ],
        [this.$t('liquor_licence'), this.$t('club_liquor_licence'),],
        []
      ]
    },
    partThreeButtons() {
      return [
        [
          [this.$t('liquor_licence'), this.$t('club_liquor_licence'),],
          [this.$t('liquor_licence'), this.$t('club_liquor_licence'),],
          [this.$t('application_for_authorisation_of_a_nominated_reserve_licensee'),],
          [this.$t('application_for_authorisation_of_a_nominated_reserve_licensee'),],
          [this.$t('liquor_licence'), this.$t('club_liquor_licence'),],
          [this.$t('liquor_licence'), this.$t('club_liquor_licence'),],
          [this.$t('liquor_licence'), this.$t('club_liquor_licence'),],
        ],
        [/*Parent is Renewal*/],
        [/*Parent is Follow Up*/]
      ]
    }
  },
  data: () => ({
    partOne: {
      selected: undefined,
    },
    partTwo: [
      {selected: undefined,},//Parent is Applications
      {selected: undefined,},//Parent is Renewal
      {},//Parent is Follow Up
    ],
    partThree: [
      [
        //Parent is Applications
        {
          //NewLicense
          selected: undefined,
        },
        {
          //Licence Transfer
          selected: undefined,
        },
        {
          //Nomination of Reserve Licensee
          selected: undefined,
        },
        {
          //Nomination of Reserve Licensee
          selected: undefined,
        },
        {
          //Temporary Absence
          selected: undefined,
        },
        {
          //Licence Amendment
          selected: undefined,
        },
        {
          //Change Information
          selected: undefined,
        },
      ],
      [
        //Parent is Renewal
      ],
      [
        //Parent is Follow Up
      ],
    ],
  }),
  methods: {
    checkShouldShowApply: function () {
      if (
          !(this.partOne.selected == undefined) &&
          !(this.partTwo[this.partOne.selected].selected == undefined)
      ) {
        return true;
      } else if (this.partOne.selected == 1) {
        return true;
      }
      return false;
    },
    async scrollToElement(class_name) {
      const el = this.$el.getElementsByClassName(class_name)[0];
      await this.$nextTick();
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    },
    tryRouteTo() {
      var s1 = this.partOne.selected;
      var s2 = this.partTwo[this.partOne.selected].selected;
      var s3 =
          this.partThree[this.partOne.selected][
              this.partTwo[this.partOne.selected].selected
              ].selected;
      console.log(s1, s2, s3);
      if (s2 == 3) {
        console.log("route to login");
      }
    },
  },
  mounted() {
    this.$root.$emit("updateNav", 0);
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  padding: 0px 120px 115px;

  h1 {
    font-size: 3.875em;
    margin-top: 87px !important;
  }

  #h1-boldline {
    margin: 28px 0px 40px 0px;
  }

  h2 {
    font-size: 1.625em;
    font-weight: 500;
  }
}

.part-1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  div:nth-child(2) {
    width: 100%;
    margin: 35px 0px;

    .v-btn-toggle--group {
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      width: 100%;
    }

    .v-btn-toggle--group > .v-btn.v-btn {
      margin: 0px 12px !important;
      padding: 20px;
      border-radius: 10px !important;
      border: 1.5px solid $ols-t-lightGrey;
      width: 300px;
      height: 250px;
      background-color: transparent !important;
      font-size: 1em;

      .btn-slot {
        width: 100%;
      }

      .tick-cir-div {
        height: 32px;

        img {
          height: 32px;
          width: 32px;
        }
      }

      h3 {
        text-transform: none !important;
        letter-spacing: normal;
        font-size: 1.75em;
        margin-bottom: 20px;
      }
    }

    .v-btn-toggle > .v-btn.v-btn--active {
      color: white;
      border: 0px;
      background: $ols-primary !important;
    }
  }
}

.part-2 {
  .form-type-reminder {
    width: 700px !important;
    font-size: 120%;
    padding-bottom: 20px;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  div:nth-child(2) {
    width: 100%;
    margin: 35px 0px;

    .v-btn-toggle--group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      width: 100%;
    }

    .v-btn-toggle--group > .v-btn.v-btn {
      margin: 0px 0px 20px !important;
      border-radius: 10px !important;
      border: 1.5px solid $ols-t-lightGrey;
      width: 700px;
      min-height: 90px;
      background-color: transparent !important;
      font-size: 1em;

      .btn-slot {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 47px 0px 78px;

        &.large {
          text-align: left;

          h3 {
            max-width: 500px;
            white-space: pre-wrap;
          }
        }
      }

      img {
        height: 32px;
        width: 32px;
      }

      h3 {
        text-transform: none !important;
        letter-spacing: normal;
        font-size: 1.5em;
        font-weight: 400;
      }
    }

    .v-btn-toggle > .v-btn.v-btn--active {
      color: white;
      border: 0px;
      background: $ols-primary !important;
    }
  }
}

.part-3 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  div:nth-child(2) {
    width: 100%;
    margin: 35px 0px;
    display: flex;
    justify-content: center;

    .v-btn-toggle--group {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      width: 720px;
    }

    .v-btn-toggle--group > .v-btn.v-btn {
      margin: 0px 10px 20px !important;
      border-radius: 10px !important;
      border: 1.5px solid $ols-t-lightGrey;
      width: 340px;
      height: 90px;
      background-color: transparent !important;
      font-size: 1em;

      .btn-slot {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      img {
        position: absolute;
        right: 16px;
        height: 32px;
        width: 32px;
      }

      h3 {
        text-transform: none !important;
        letter-spacing: normal;
        font-size: 1.5em;
        font-weight: 400;
      }
    }

    .v-btn-toggle > .v-btn.v-btn--active {
      color: white;
      border: 0px;
      background: $ols-primary !important;
    }
  }
}

.part-4 {
  .apply-btn {
    width: 180px !important;
    height: 50px;
    text-transform: none;
    font-size: 1em;
    font-weight: 400 !important;
    letter-spacing: 0px;

    span {
      font-size: 1em;
    }
  }
}

//md and down
@media screen and (max-width: 1263px) {
  .main-container {
    width: 100%;
    height: 100%;
    padding: 0px 14px 57px;

    h1 {
      font-size: 1.625em;
      margin-top: 50px !important;
    }

    #h1-boldline {
      margin: 20px 0px;
    }

    h2 {
      font-size: 1em;
      font-weight: 500;
    }
  }

  .part-1 {
    padding: 0px 15px;

    div:nth-child(2) {
      margin: 22px 0px 30px;

      .v-btn-toggle--group > .v-btn.v-btn {
        margin: 0px 6px !important;
        padding: 9px;
        border-radius: 5px !important;
        width: 106px;
        height: 106px;

        img {
          height: 40px;
          margin: 0px !important;
        }

        .tick-cir-div {
          height: 16px;

          img {
            width: 16px;
            height: 16px;
          }
        }

        h3 {
          text-transform: none !important;
          letter-spacing: normal;
          font-size: 0.9375em;
          font-weight: 500;
          margin-top: 5px;
          margin-bottom: 8px;
        }
      }

      .v-btn-toggle > .v-btn.v-btn--active {
        color: white;
        border: 0px;
        background: $ols-primary !important;
      }
    }
  }

  .part-2 {
    .form-type-reminder {
      width: 301.5px !important;
      font-size: 100%;
      padding-bottom: 10px;
    }

    div:nth-child(2) {
      margin-top: 20px;

      .v-btn-toggle--group > .v-btn.v-btn {
        margin: 0px 0px 10.25px !important;
        border-radius: 5px !important;
        width: 301.5px;
        height: 61.5px;
        min-height: 0px;

        .btn-slot {
          padding: 0px 6px 0px 8px;

          &.large {
            text-align: left;

            h3 {
              max-width: 220px;
              white-space: pre-wrap;
            }
          }
        }

        img {
          height: 22px;
          width: 22px;
        }

        h3 {
          font-size: 1em;
          font-weight: 500;
        }
      }
    }
  }

  .part-3 {
    div:nth-child(2) {
      margin-top: 20px;

      .v-btn-toggle--group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        width: 100%;
      }

      .v-btn-toggle--group > .v-btn.v-btn {
        margin: 0px 0px 10.25px !important;
        border-radius: 5px !important;
        width: 301.5px;
        height: 61.5px;

        .btn-slot {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 0px 6px 0px 9px;
        }

        img {
          right: 5px;
          height: 22px;
          width: 22px;
        }

        h3 {
          font-size: 1em;
          font-weight: 500;
        }
      }
    }
  }

  .part-4 {
    .apply-btn {
      span {
        font-size: 1em;
      }
    }
  }
}

.part-2 .v-btn {
  white-space: unset;
  display: initial;
  text-align: left;
}

.grayscale {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}

</style>
