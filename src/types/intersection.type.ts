
export type callback = (
  isIntersecting: boolean,
  { entries: IntersectionObserverEntry,
    observer: IntersectionObserver
  }
) => void;

export type intersectionType = (
  callback: callback
) => void



