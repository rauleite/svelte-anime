
export type callback = (
  isIntersecting: boolean,
  intersectionApiParams: {
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  }
) => void;

export type attachListener = {
  element: HTMLElement | Document;
  name: string;
  callback: (...args: any[]) => void
}

export type observerOptions = {}

export type intersectParam = {
  attachListener?: attachListener;
  observerOptions?: IntersectionObserverInit;
}

// export type intersectParam = typeof IntersectionObserver[number]


