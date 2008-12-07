var Slides = {

  slides: null,
  timer: null,

  initialize: function() {
    this.slides = document.getElementsByTagName('article')
    this.update()    

    var that = this

    this.timer = setInterval(function() {
      that.update()
    }, 500)

    jQuery(window).click(function() {
      that.next()
    })
    
    jQuery(window).mousewheel(function() {
      that.next()
    }, function() {
      that.previous()
    }, true)
    
    jQuery(window).keypress(function(e) {
      if (e.which == 32) // space
        that.next()
    })
  },

  current_slide: function() {
    var hash = window.location.hash.replace(/^#/, '')
    var elem = document.getElementById(hash)
    return elem || this.slides[0]
  },


  next: function() {
    this.jump_to(jQuery(this.current_slide()).next()[0])
  },

  previous: function() {
    this.jump_to(jQuery(this.current_slide()).prev()[0])
  },

  jump_to: function(slide) {
    slide = slide || this.slides[0]
    window.location.hash = '#'+slide.id
    this.update()
  },

  update: function() {
    jQuery(this.slides).hide()
    this.current_slide().style.display = 'block'
  }
}

jQuery(function(){
  Slides.initialize()
})

