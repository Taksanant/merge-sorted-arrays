export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
  ): number[] {
    let result: number[] = [];
    let i = 0, j = 0, k = collection_3.length - 1;
  
    while (i < collection_1.length && j < collection_2.length) {
      if (collection_1[i] < collection_2[j]) {
        result.push(collection_1[i++]);
      } else {
        result.push(collection_2[j++]);
      }
    }
    while (i < collection_1.length) result.push(collection_1[i++]);
    while (j < collection_2.length) result.push(collection_2[j++]);
  
    while (k >= 0) {
      let value = collection_3[k--];
      let pos = result.length;
      while (pos > 0 && result[pos - 1] > value) {
        pos--;
      }
      result.splice(pos, 0, value);
    }
  
    return result;
  }