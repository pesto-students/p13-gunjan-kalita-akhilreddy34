class Solution {
  kthElement(A, B, n, m, k) {
    //code here
    return this.findMedianSortedArrays(A, B, k);
  }

  findMedianSortedArrays = function (nums1, nums2, k) {
    nums1.unshift(Number.NEGATIVE_INFINITY);
    nums1.push(Number.POSITIVE_INFINITY);
    nums2.unshift(Number.NEGATIVE_INFINITY);
    nums2.push(Number.POSITIVE_INFINITY);

    let totalArrayLength = nums1.length + nums2.length;
    let leftportionLength = k + 2;
    let l1 = 0;
    let l2 = 0;
    let r1 = nums1.length - 1;
    let r2 = nums2.length - 1;
    let mid;

    while (l2 <= r2) {
      mid = Math.floor((l2 + r2) / 2);
      let r2Partition = mid;
      if (r2Partition >= leftportionLength) {
        r2 = r2 - 1;
      } else {
        r1 = leftportionLength - (r2Partition + 1) - 1;

        if (
          (nums1[r1 + 1] ? nums2[r2Partition] <= nums1[r1 + 1] : true) &&
          (nums2[r2Partition + 1] ? nums1[r1] <= nums2[r2Partition + 1] : true)
        ) {
          //console.log("---r1",r1,"r2",r2)
          return Math.max(nums1[r1], nums2[r2Partition]);
        } else if (
          nums1[r1 + 1] ? nums2[r2Partition] <= nums1[r1 + 1] == false : false
        ) {
          r2 = mid - 1;
        } else if (
          nums2[r2Partition + 1]
            ? nums1[r1] <= nums2[r2Partition + 1] == false
            : false
        ) {
          l2 = mid + 1;
        }
      }
    }
  };
}
