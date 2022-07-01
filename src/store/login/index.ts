/* eslint-disable @typescript-eslint/no-explicit-any */
import { Module } from 'vuex'
import { IRootState } from '../type'
import axios from 'axios'
import Swal from 'sweetalert2'
import router from '@/router'
// import { instance } from '@/request/api.ts'

interface ILoginState {
  token: string
  userInfo: any
}

// Module<S, R> --> state: S, rootState: R
const LoginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {
        mail: '',
        password: ''
      }
    }
  },
  mutations: {
    loginData(state, payload) {
      state.userInfo.mail = payload.mail
      state.userInfo.password = payload.password
      console.log('這個:' + state.userInfo.mail)
    },
    logoutData(state) {
      state.userInfo.mail = ''
      state.userInfo.password = ''
    },
    changeMail(state, payload) {
      state.userInfo.mail = JSON.parse(payload)
    }
  },
  getters: {},
  actions: {
    // context: this store
    async AccountLogin(context, payload: any) {
      const postAccount = axios.post(
        process.env.VUE_APP_API + '/users/login',
        payload
      )
      try {
        const loginResult = await postAccount
        if (loginResult.data.success) {
          sessionStorage.setItem(
            'userinfo',
            JSON.stringify(loginResult.data.result.mail)
          )
          console.log(loginResult.data.result)
          context.commit('loginData', loginResult.data.result)
          Swal.fire('ログインしました!', '', 'success').then(() => {
            router.go(-1)
          })
        }
      } catch (err: any) {
        if (err.response.status === 404) {
          console.log('找不到帳號')
          Swal.fire('アカウントが見つかりません', '', 'warning')
        } else {
          console.log(err)
          Swal.fire(err.message, '', 'error')
        }
      }
    },
    LoadSessionLogin({ commit }) {
      const login_mail = sessionStorage.getItem('userinfo')
      if (login_mail) {
        commit('changeMail', login_mail)
      }
    }
  }
}

export default LoginModule
