import Vue from 'vue'
import Router from 'vue-router'
import { store } from '../store/index.js';

import HomeView from '../views/HomeView.vue'
import InterviewView from '../views/InterviewView.vue'
import OneInterviewView from '../views/OneInterviewView.vue';
import ConfirmView from '../views/ConfirmView.vue';
import ErrorView from '../views/ErrorView.vue';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView
        },
        {
            path: '/interviews',
            name: 'interviews',
            component: InterviewView
        },
        {
            path: '/interviews/:id',
            name: 'interview',
            component: OneInterviewView,
            beforeEnter: (to, from, next) => {
                store.dispatch('FETCH_INTERVIEW_BY_ID', { id: to.params.id })
                    .then(() => next())
                    .catch(() => {
                        next({
                            name: 'notFound'
                        })
                    });
            }
        },
        {
            path: '/auth/confirm/:confirmCode',
            name: 'confirm',
            component: ConfirmView
        },
        {
            path: '*',
            name: 'notFound',
            component: ErrorView
        }
    ]
})
