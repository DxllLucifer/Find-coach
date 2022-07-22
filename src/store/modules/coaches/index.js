import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'


export default {
    namespaced: true,
    state() {
        return {
            lastFetch: null,
            coaches: [
                {
                  id: 'c1',
                  firstName: 'Santosh',
                  lastName: 'Kumar',
                  areas: ['frontend', 'backend', 'career'],
                  description:
                    "I'm Santosh and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                  hourlyRate: 30
                },
                {
                  id: 'c2',
                  firstName: 'Rajesh',
                  lastName: 'Kumar',
                  areas: ['frontend', 'career'],
                  description:
                    'I am Rajesh and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                  hourlyRate: 30
                },
                {
                  id: 'c3',
                  firstName: 'Rohit',
                  lastName: 'Bhatia',
                  areas: ['frontend', 'career','allrounder'],
                  description:
                    'I am Rohit and as a senior developer in a Sonar technology company, I can help you get your first job or progress in your current role.',
                  hourlyRate: 30
                },
              ]
        }
    },
    mutations,
    actions,
    getters
}