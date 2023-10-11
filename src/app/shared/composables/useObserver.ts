import type { IObserver } from './interfaces/useObserver';

const config = { childList: true, subtree: true };

export default function useObserver(): IObserver {
  const init = ({
    trigger,
    action
  }: { trigger: HTMLElement | Element, action?: () => any }): void => {
    const observer = new MutationObserver(async (mutations) =>{
      for(const mutation of mutations) {
        if (mutation.type === "childList") {
          if(action) action()
        }
      }

      observer.disconnect()
    });

    observer.observe(trigger, config);
  }

  return { init }
}