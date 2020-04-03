import React, { useReducer } from 'react'
import { GithubContext } from './githubContext'
import { githubReducer } from './githubReduser'
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING } from '../types'


export const GithubState = ({ children }) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const searc = async vale => {
        setLoading()
        //...

        dispatch({
            type: SEARCH_USERS,
            payload: []
        })
    }

    const getUser = async name => {
        setLoading()
        //...

        dispatch({
            type: GET_USER,
            payload: {}
        })
    }

    const getRepos = async name => {
        setLoading()
        //...

        dispatch({
            type: GET_REPOS,
            payload: []
        })
    }

    const claerUsers = () => dispatch({ type: CLEAR_USERS })

    const setLoading = () => dispatch({ type: SET_LOADING })

    const { user, users, repos, loading } = state

    return (
        <GithubContext.Provider value={{
            setLoading, searc, getUser, getRepos, claerUsers,
            user, users, repos, loading
        }}>
            {children}
        </GithubContext.Provider>
    )
}