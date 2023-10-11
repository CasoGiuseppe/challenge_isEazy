export const sortByDate = ({ array }: { array: any[] }): any[] =>
  array.sort((prev, next) => {
    return new Date(prev.item.date).valueOf() - new Date(next.item.date).valueOf();
  });
export const randomTiming = (min: number, max: number): number => Math.random() * (max - min) + min;
export const unique = ({ array }: { array: Record<string, any>[] }): any[] => {
  return array.filter((obj, index) => index === array.findIndex((o) => obj.id === o.id));
};

export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
export const delay = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));
