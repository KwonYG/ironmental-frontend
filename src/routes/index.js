import Vue from 'vue'
import Router from 'vue-router'

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
            component: OneInterviewView
        },
        {
            path: '/auth/confirm/:confirmCode',
            name: 'confirm',
            component: ConfirmView
        },
        {
            path: '/error',
            name: 'error',
            component: ErrorView
        }
    ]
})
