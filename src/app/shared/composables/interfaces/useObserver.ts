export interface IObserver {
  init({ trigger, action }: { trigger: HTMLElement | Element, action?: () => any }): void,
}