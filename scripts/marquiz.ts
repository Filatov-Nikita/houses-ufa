export const body1 = `
  (function(w, d, s, o){
    var j = d.createElement(s); j.async = true; j.src = '//script.marquiz.ru/v2.js';j.onload = function() {
      if (document.readyState !== 'loading') Marquiz.init(o);
      else document.addEventListener("DOMContentLoaded", function() {
        Marquiz.init(o);
      });
    };
    d.head.insertBefore(j, d.head.firstElementChild);
  })(window, document, 'script', {
      host: '//quiz.marquiz.ru',
      region: 'eu',
      id: '6576a009d31c6600253aac67',
      autoOpen: false,
      autoOpenFreq: 'once',
      openOnExit: false,
      disableOnMobile: false
    }
  );
`;

export const body2 = `
  (function(t, p) {window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {Marquiz.add([t, p])})})('Widget', {id: '6576a009d31c6600253aac67', position: 'right', delay: 35, autoOpen: 50})
`;
