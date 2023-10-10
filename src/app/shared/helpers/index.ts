export const sortByDate = ({ array }: { array: any[] }) =>
  array.sort((prev, next) => {
    return new Date(prev.item.date).valueOf() - new Date(next.item.date).valueOf();
  });
