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

export const tranformDate = (date: string): string => {
  const newDate = new Date(date);
  const time = `${transformHour(newDate.getHours())}:${transformHour(newDate.getMinutes())}`;
  return `${newDate.toLocaleDateString('it-IT')} - ${time}`;
};
export const transformHour = (time: number): string => time < 10 ? `0${time}` : `${time}`
export const convertBytes = (bytes: number, seperator:string = "") => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes == 0) return 'n/a'
  const transformation = Math.floor(Math.log(bytes) / Math.log(1024))
  const i = parseInt(transformation.toString(), 10)
  if (i === 0) return `${bytes}${seperator}${sizes[i]}`
  return `${(bytes / (1024 ** i)).toFixed(1)}${seperator}${sizes[i]}`
}
