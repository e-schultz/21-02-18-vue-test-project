import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
  it('should route to a happy place', () => {
    
    const next = jest.fn((arg) => {
      if (typeof arg === 'function') {
        arg()
      }



    });
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    vm.$options.beforeRouteEnter({ params: { messsage: 'hello world' } }, {}, next)
    expect(next).toHaveBeenCalled();

  })
  it('should route to a default message if none is provided', () => {
    
    const next = jest.fn((arg) => {
      if (typeof arg === 'function') {
        arg()
      }

    });
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    vm.$options.beforeRouteEnter({ 
      fullPath: '/',
      params: { messsage: undefined } }, {}, next)
    expect(next).toHaveBeenLastCalledWith({"path": "/hello"})
  })
})
