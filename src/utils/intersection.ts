import type {
  callback, intersectParam
} from '../../types/intersection.type'
/**
 * Intercepts an element and can addis a callback listener when that element is visible
 * @param callback
 * @param observerOptions
 */
// export function intersect(callback: callback, {attachListener: attachListener, observerOptions: observerOptions}) {
export function intersect(
  callback: callback,
  { attachListener, observerOptions }: intersectParam
): IntersectionObserver {

  let element = attachListener?.element;
  let name = attachListener?.name;

  let observer = new IntersectionObserver((entries, observer) => {
    let isIntersecting = entries[0].isIntersecting;
    console.log('eye show', isIntersecting);

    callback(isIntersecting, { entries, observer });

    let attachCallback = attachListener?.callback;
    console.log(attachCallback)

    if (typeof attachCallback !== 'function') {
      return
    }

    if (isIntersecting) {
      // eyeBlink = true;
      // runs before be attached
      attachCallback();
      element.addEventListener(name, attachCallback);
      return;
    }
    element.removeEventListener(name, attachCallback);
    // eyeBlink = false;
  }, observerOptions);
  return observer;
}

