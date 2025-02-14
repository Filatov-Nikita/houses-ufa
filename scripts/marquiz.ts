const complexesScript = `
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
      region: 'ru',
      id: '658c1102deb8d700258adea4',
      autoOpen: false,
      autoOpenFreq: 'once',
      openOnExit: false,
      disableOnMobile: false
    }
  );
`;

const townsScript = `
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
      region: 'ru',
      id: '65aa39f2deb12b0025556685',
      autoOpen: false,
      autoOpenFreq: 'once',
      openOnExit: false,
      disableOnMobile: false
    }
  );
`;

export function removeWidgets() {
  const widgets = document.querySelectorAll('.marquiz-widget');
  widgets.forEach(widget => {
    widget.remove();
  });
}

export function addComplexesWidget() {
  if(import.meta.server || import.meta.env.DEV) return;
  exec(() => {
    // @ts-ignore
    (function(t, p) {window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {Marquiz.add([t, p])})})('Widget', {id: '658c1102deb8d700258adea4', position: 'right', delay: 0, autoOpen: 0, disableIfClosed: false})
  });
}


export function addTownsWidget() {
  if(import.meta.server || import.meta.env.DEV) return;
  exec(() => {
    //@ts-ignore
    (function(t, p) {window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {Marquiz.add([t, p])})})('Widget', {id: '65aa39f2deb12b0025556685', position: 'right', delay: 120, autoOpen: 180, disableIfClosed: true});
  })
}

export const addComplexesScript = execOnce(() => {
  if(import.meta.server || import.meta.env.DEV) return;
  useHead({
    script: [
      {
        type: 'text/javascript',
        innerHTML: complexesScript,
      }
    ],
  });
});

export const addTownsScript = execOnce(() => {
  if(import.meta.server || import.meta.env.DEV) return;
  useHead({
    script: [
      {
        type: 'text/javascript',
        innerHTML: townsScript,
      }
    ],
  });
});

function execOnce(cb: () => void) {
  let count = 0;
  return () => {
    if(count > 0) return;
    cb();
    count++;
  }
}

function exec(cb: () => void) {
  removeWidgets();
  setTimeout(cb, 500);
}
