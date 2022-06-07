import { createStore } from "vuex";

export default createStore({
  state: {
    character: {
      gender: 1,
      job: ["0"],
      head: 1,
      headPalette: 1,
      headdir: 0,
      headgear: [0, 0, 0],
      garment: 0,
      bodyPalette: 0,
      action: 0,
      canvas: "200x200+100+150",
      outfit: 0,
    },
    headgear_top_id: 0,
    headgear_mid_id: 0,
    headgear_bottom_id: 0,
    garment_id: 0,
  },
  getters: {},
  mutations: {
    SAVE_GENDER(state, gender) {
      state.character.gender = gender;
    },
    SAVE_HAIR_COLOR(state, id) {
      state.character.headPalette = id - 1;
    },
    SAVE_HEAD(state, id) {
      state.character.head = id;
    },
    SAVE_BODY_PALETTE(state, id) {
      state.character.bodyPalette = id;
    },
    SAVE_JOB(state, id) {
      state.character.job[0] = id.toString();
    },
    SAVE_HEADGEAR_TOP(state, viewID) {
      state.character.headgear[1] = viewID;
    },
    SAVE_HEADGEAR_TOP_ID(state, itemID) {
      state.headgear_top_id = itemID;
    },
    SAVE_HEADGEAR_MID(state, viewID) {
      state.character.headgear[2] = viewID;
    },
    SAVE_HEADGEAR_MID_ID(state, itemID) {
      state.headgear_mid_id = itemID;
    },
    SAVE_HEADGEAR_BOTTOM(state, viewID) {
      state.character.headgear[0] = viewID;
    },
    SAVE_HEADGEAR_BOTTOM_ID(state, itemID) {
      state.headgear_bottom_id = itemID;
    },
    SAVE_GARMENT(state, viewID) {
      state.character.garment = viewID;
    },
    SAVE_GARMENT_ID(state, itemID) {
      state.garment_id = itemID;
    },
    SAVE_CHARACTER_POSITION(state, side) {
      if (side == "left") {
        let action = (state.character.action + 1) % 8;
        if (action == 0) {
          state.character.action -= 7;
        } else {
          state.character.action++;
        }
      } else {
        let action = state.character.action % 8;
        if (action == 0) {
          state.character.action += 7;
        } else {
          state.character.action--;
        }
      }
    },
    SAVE_ACTION(state, id) {
      let action = (state.character.action + 1) % 8;
      state.character.action = id + action - 1;
      if (state.character.action < 0) state.character.action = 0;
    },
    SAVE_OUTFIT(state, checked) {
      console.log(checked);
      if (checked) {
        state.character.outfit = 1;
      } else {
        state.character.outfit = 0;
      }
    },
    RESET_CHARACTER(state, payload) {
      state.character.gender = 1
      state.character.job = ["0"]
      state.character.head = 1
      state.character.headPalette = 1
      state.character.headgear = [0, 0, 0]
      state.character.garment = 0
      state.character.bodyPalette = 0
      state.character.action = 0
      state.character.outfit = 0
    },
    SAVE_CHARACTER(state, character) {
      state.character = character;
    },
  },
  actions: {},
  modules: {},
});