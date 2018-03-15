export function truncString (value: string, add: string, max: number) {
  add = add || '...';
  return (value.length > max ? value.substring(0, max ) + add : value);
}

export function lengthInMinutes (value: string) {
  
    let min = value.split(' ').length / 250;
    if (min <= 0 || min === 0) {
      return 'less than a minute read';
    } else if (min <= 0.9 || min === 0.9) {
      return 'less than a minute read';
    } else {
      return `${min} min read`;
    }
}