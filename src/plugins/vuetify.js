// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify, {
    theme: {
        themes: {
            light: {
                primary: '#ff9999',
                secondary: '#ff9999',
                accent: '#ff9999',
                error: '#ff9999',
            }
        }
        
    }
})


const opts = {}

export default new Vuetify(opts)