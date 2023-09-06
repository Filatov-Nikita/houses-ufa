export const useMovable = (onMove: (e: { x: number }, target: HTMLElement) => void) => {
  function onMousedown(e: MouseEvent) {
    document.body.classList.add('tw-select-none');
    const newWindow = window as any;
    const target = e.target as HTMLElement;
    newWindow._onMove = (e: MouseEvent) => onMove({ x: e.x }, target);
    window.addEventListener('mousemove', newWindow._onMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  function onTouchdown(e: TouchEvent) {
    e.preventDefault();
    const newWindow = window as any;
    const target = e.target as HTMLElement;
    newWindow._onTouchmove = (e: TouchEvent) => {
      e.preventDefault();
      onMove({ x: e.touches[0].clientX}, target);
    }
    window.addEventListener('touchmove', newWindow._onTouchmove);
    window.addEventListener('touchend', onTouchend);
  }

  function onTouchend(e: TouchEvent) {
    const newWindow = window as any;
    window.removeEventListener('touchmove', newWindow._onTouchmove);
    window.removeEventListener('touchend', onTouchend);
    delete newWindow._onTouchmove;
  }

  function onMouseUp() {
    document.body.classList.remove('tw-select-none');
    const newWindow = window as any;
    window.removeEventListener('mousemove', newWindow._onMove);
    window.removeEventListener('mouseup', onMouseUp);
    delete newWindow._onMove;
  }

  return {
    onMousedown,
    onTouchdown
  }
}
