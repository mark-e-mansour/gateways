import thunk from 'redux-thunk'
import '@testing-library/jest-dom'
import { formatDate, formatDevice } from './utils/helpers'
import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { act } from 'react-dom/test-utils';
import reducer from './reducers'
import middleware from './middleware'
import NewGateway from './components/NewGateway'
import NewDevice from './components/NewDevice'


describe('Thunk passing dispatch and getState Test', function () {
  const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn()
    }
    const next = jest.fn()

    const invoke = action => thunk(store)(next)(action)

    return { store, next, invoke }
  }

  test('passes through non-function action', () => {
    const { next, invoke } = create()
    const action = { type: 'TEST' }
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
  })

  test('calls the function', () => {
    const { invoke } = create()
    const fn = jest.fn()
    invoke(fn)
    expect(fn).toHaveBeenCalled()
  })

  test('passes dispatch and getState', () => {
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch('TEST DISPATCH')
      getState()
    })
    expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
    expect(store.getState).toHaveBeenCalled()
  })
})

 
describe('Helper functions unit Testing', function () {
  test('formatDate Function returns correct date string', () => {
    const newDate = 1626711564957
    expect(formatDate(newDate)).toBe("19/7/2021 18:19:24")
  })

  test('formatDevice Function returns correct device object', () => {
    const newDevice = {UID:123, vendor:'test', status:'Online'}
    expect(formatDevice(newDevice)).toMatchObject(expect.objectContaining({
      UID: expect.any(Number),
      vendor: expect.any(String),
      status: expect.any(String),
      date: expect.any(Number),
      id: expect.any(String)
    }))
    
  })
})

describe('UI unit Testing', function () {
  let container;

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })
  
  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  it('<NewGateway> renders correctly', () => {
    act(() => {
      const store = createStore(reducer, middleware)
      ReactDOM.render(<Provider store={store}><NewGateway /></Provider>, container)
    })
  })

  it('<NewDevice> renders correctly', () => {
    act(() => {
      const store = createStore(reducer, middleware)
      ReactDOM.render(<Provider store={store}><Router><NewDevice /></Router></Provider>, container)
    })
  })
})