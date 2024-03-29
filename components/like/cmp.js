// components/like/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    // like: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLikeTap () {
      const like = !this.data.like;
      this.setData({
        like
      })

      this.triggerEvent('like', {
        like
      })
      
    }
  }
})
