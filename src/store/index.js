import { createStore } from '@mpxjs/core'

export default createStore({
  state: {
    systemInfo: {}
  },
  actions: {
    // 读取当前设备信息
    loadSystemInfo (context) {
      return new Promise((resolve, reject) => {
        wx.getSystemInfo({
          success: res => resolve(context.commit('writeSystemInfo', res)),
          fail: err => reject(err)
        })
      })
    }
  },
  mutations: {
    writeSystemInfo (state, payload) {
      state.systemInfo = payload
    }
  },
  getters: {
    systemInfo: state => state.systemInfo
  }
})
