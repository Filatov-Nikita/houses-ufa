import * as MarquizScript from '@/scripts/marquiz';

function createScript(id: string, html: string) {
  const script = document.createElement('script');
  script.innerHTML = html;
  script.dataset['scriptId'] = id;
  return script;
}

function appendScript(script: HTMLScriptElement) {
  document.head.append(script);
  return script;
}

function removeScript(script: HTMLScriptElement) {
  script.remove();
}

function removeWidgets() {
  const widgets = document.querySelectorAll('.marquiz-widget');
  widgets.forEach(widget => {
    widget.remove();
  });
}

function removeAddedScripts() {
  const scripts = document.querySelectorAll('script');
  scripts.forEach(script => {
    if(script.src.indexOf('marquiz') !== -1) {
      script.remove();
    }
  });
}

export default function() {
  if(process.client && import.meta.env.PROD) {
    const script1 = createScript('MarquizScript1', MarquizScript.body1);
    const script2 = createScript('MarquizScript2', MarquizScript.body2);

    onMounted(() => {
      appendScript(script1);
      appendScript(script2);
    });

    onUnmounted(() => {
      removeScript(script1);
      removeScript(script2);
      removeWidgets();
      removeAddedScripts();
    });
  }
}
