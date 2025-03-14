import { merge } from "../src/merge";

describe("merge function", () => {
  test("should merge and sort three collections correctly", () => {
    const collection_1 = [1, 3, 5, 7];
    const collection_2 = [2, 4, 6, 8];
    const collection_3 = [10, 9, 5, 0]; // Descending order

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]);
  });

  test("should handle empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
    expect(merge([], [4, 5, 6], [])).toEqual([4, 5, 6]);
    expect(merge([], [], [3, 2, 1])).toEqual([1, 2, 3]);
  });

  test("should handle single element arrays", () => {
    expect(merge([1], [2], [3])).toEqual([1, 2, 3]);
    expect(merge([3], [1], [2])).toEqual([1, 2, 3]);
  });
});