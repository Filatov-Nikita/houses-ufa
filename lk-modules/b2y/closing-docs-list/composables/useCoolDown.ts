export default function(from: number, onFinish: () => void) {
  const timer = ref(from);

  const started = ref(false);

  let _interval: any;

  function start() {
    started.value = true;
    _interval = setInterval(tick, 1000);
  }

  function tick() {
    reduce();
    if(timer.value === 0) {
      pause();
      onFinish();
    }
  }

  function reduce() {
    timer.value--;
  }

  function reset() {
    timer.value = from;
  }

  function pause() {
    started.value = false;
    clearInterval(_interval);
  }

  function stop() {
    pause();
    reset();
  }

  function refresh() {
    stop();
    start();
  }

  return {
    timer,
    started,
    start,
    reset,
    stop,
    refresh,
  }
}
