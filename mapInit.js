import getRandomId from '../../utils/getRandomId'
export default function mapsInit() {
  const _this = this

  _this.init = function (options, callback) {
    ymaps.ready(function () {
      const map_id = getRandomId()
      options.el.attr('id', map_id)
      options.el.addClass('mapsInit')
      options = $.extend(
        {
          el: $('.offices-contacts__map'),
          center: [55.7529, 37.6211],
          zoom: 15,
          minZoom: 6,
          maxZoom: 19,
          zoomButtons: true,
          disableScroll: true,
          disableDrag: false,
        },
        options
      )

      _this.map = new ymaps.Map(
        map_id,
        {
          center: options.center,
          zoom: options.zoom,
          controls: [],
        },
        {
          minZoom: options.minZoom,
          maxZoom: options.maxZoom,
        }
      )

      if (options.disableScroll) _this.map.behaviors.disable('scrollZoom')
      if (options.disableDrag) _this.map.behaviors.disable('drag')

      if (options.zoomButtons) {
        if (options.zoomButtons.length) {
          function update_zoom_buttons(cur_zoom) {
            options.zoomButtons
              .filter('.in')
              .toggleClass('disabled', cur_zoom >= options.maxZoom)
              .end()
              .filter('.out')
              .toggleClass('disabled', cur_zoom <= options.minZoom)
          }

          options.zoomButtons.on('click', function () {
            var cur_zoom = _this.map.getZoom() + Number($(this).data('targ'))
            _this.map.setZoom(cur_zoom)
            update_zoom_buttons(cur_zoom)
          })

          update_zoom_buttons(options.zoom)
        } else {
          _this.map.controls.add('zoomControl')
        }
      }

      if (callback) callback(_this.map)

      //При нажатии на категорию, карта отдаляется
      $('.object__placement-infrastructure-button').on('click', function () {
        _this.map.setZoom(13)
      })
    })

    _this.objectMarker = function (opt) {
      opt = $.extend(
        {
          customData: {},
          mouseenter() {},
          mouseleave() {},
        },
        opt
      )

      let marker_html
      const marker_layout = ymaps.templateLayoutFactory.createClass(opt.html, {
        build() {
          marker_layout.superclass.build.call(this)
          marker_html =
            this.getParentElement().getElementsByClassName('ba-marker-inner')[0]
          marker.$el = $(marker_html)
        },
      })
      const marker = new ymaps.Placemark(
        opt.position,
        {
          hintContent: '',
        },
        {
          iconLayout: 'default#imageWithContent',
          iconImageHref: '/assets/i/blank.gif',
          iconImageSize: opt.size ? opt.size : [50, 69],
          iconImageOffset: opt.offset ? opt.offset : [-25, -69],
          iconContentOffset: [0, 0],
          iconContentLayout: marker_layout,
        }
      )
      // marker.$el = $(marker_html);
      marker.customData = opt.customData
      marker.events
        .add('mouseenter', function (e) {
          const $inner_el = $(marker_html)

          $inner_el.addClass('hover')
          opt.mouseenter(e, $inner_el)
        })
        .add('mouseleave', function (e) {
          const $inner_el = $(marker_html)

          $inner_el.removeClass('hover')
          opt.mouseleave(e, $inner_el)
        })

      _this.map.geoObjects.add(marker)

      return marker
    }

    _this.infraMarker = function (opt) {
      opt = $.extend(
        {
          click() {},
          mouseenter() {},
          mouseleave() {},
        },
        opt
      )

      let marker
      let marker_html
      const marker_layout = ymaps.templateLayoutFactory.createClass(opt.html, {
        build() {
          marker_layout.superclass.build.call(this)
          marker_html =
            this.getParentElement().getElementsByClassName('marker-inner')[0]
          marker.$el = $(marker_html)
        },
      })
      marker = new ymaps.Placemark(
        opt.position,
        {
          hintContent: '',
        },
        {
          iconLayout: 'default#imageWithContent',
          iconImageHref: '/assets/i/blank.gif',
          iconImageSize: [28, 28],
          iconImageOffset: [-14, -14],
          iconContentOffset: [0, 0],
          iconContentLayout: marker_layout,
        }
      )
      marker.customData = opt.customData
      marker.events
        .add('click', function (e) {
          const $inner_el = $(marker_html)
          opt.click(e, $inner_el)
          // console.log(e.get('target'));
        })
        .add('mouseenter', function (e) {
          const $inner_el = $(marker_html)

          $inner_el.addClass('hover')
          opt.mouseenter(e, $inner_el)
        })
        .add('mouseleave', function (e) {
          const $inner_el = $(marker_html)

          $inner_el.removeClass('hover')
          opt.mouseleave(e, $inner_el)
        })

      _this.map.geoObjects.add(marker)

      return marker
    }

    _this.route = function () {
      let route, route_marker, route_marker_html, route_marker_layout

      route_marker_layout = ymaps.templateLayoutFactory.createClass(
        `<div class="marker-route marker-inner">
                    <div class="help"><span>Вы здесь</span></div>
                </div>`,
        {
          build() {
            route_marker_layout.superclass.build.call(this)
            route_marker_html =
              this.getParentElement().getElementsByClassName('marker-inner')[0]
          },
        }
      )

      route_marker = new ymaps.Placemark(
        [0, 0],
        {
          hintContent: '',
        },
        {
          iconLayout: 'default#imageWithContent',
          iconImageHref: '/assets/i/blank.gif',
          iconImageSize: [14, 14],
          iconImageOffset: [-7, -7],
          iconContentOffset: [0, 0],
          iconContentLayout: route_marker_layout,
        }
      )

      route_marker.events
        .add('mouseenter', function () {
          const $inner_el = $(route_marker_html)
          $inner_el.addClass('hover')
        })
        .add('mouseleave', function () {
          const $inner_el = $(route_marker_html)
          $inner_el.removeClass('hover')
        })

      this.toggle = function (
        show,
        start,
        finish,
        fit = false,
        addMarker = false
      ) {
        return new Promise((resolve, reject) => {
          if (route) {
            _this.map.geoObjects.remove(route)
            _this.map.geoObjects.remove(route_marker)
          }

          if (show) {
            ymaps
              .route([start, finish], {
                mapStateAutoApply: fit,
                routingMode: 'pedestrian',
              })
              .then(function (r) {
                route = r
                route.getPaths().options.set({
                  strokeColor: '#eb2d9b',
                  opacity: 1,
                })
                route.getWayPoints().removeAll()
                _this.map.geoObjects.add(route)

                if (addMarker) {
                  route_marker.geometry.setCoordinates(start)
                  _this.map.geoObjects.add(route_marker)

                  setTimeout(() => {
                    const $inner_el = $(route_marker_html)
                    $inner_el.addClass('help-visible')

                    setTimeout(() => {
                      $inner_el.removeClass('help-visible')
                    }, 1500)
                  }, 500)
                }

                resolve(route)
              })
          } else {
            resolve()
          }
        })
      }

      return this
    }
  }

  return _this
}
