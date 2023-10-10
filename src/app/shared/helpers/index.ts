export const sortByDate = ({ array }: { array: any[] }): any[] =>
  array.sort((prev, next) => {
    return new Date(prev.item.date).valueOf() - new Date(next.item.date).valueOf();
  });

  export const randomTiming = (min: number, max: number): number => Math.random() * (max - min) + min;
