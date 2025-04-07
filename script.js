// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle");
  
    if (toggle) {
      toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
      });
    }
  });
  
  // Table Filter Function
  function filterTable(inputId, tableId) {
    const input = document.getElementById(inputId);
    const filter = input.value.toUpperCase();
    const table = document.getElementById(tableId);
    const rows = table.getElementsByTagName("tr");
  
    for (let i = 1; i < rows.length; i++) {
      let cells = rows[i].getElementsByTagName("td");
      let match = false;
  
      for (let j = 0; j < cells.length; j++) {
        let cell = cells[j];
        if (cell && cell.textContent.toUpperCase().includes(filter)) {
          match = true;
          break;
        }
      }
  
      rows[i].style.display = match ? "" : "none";
    }
  }
 // Sample DSA problems (replace/add more as needed from your Excel)
const dsaQuestions = [
    {
      number: 1,
      topic: "Array",
      problem: "Find the missing number",
      link: "https://example.com"
    },
    {
      number: 2,
      topic: "Array",
      problem: "Kadane's Algorithm",
      link: "https://example.com/kadane"
    },
    
        {
          number: 3,
          topic: "Array",
          problem: "Find the Kth max and min element of an array",
          link: "https://www.geeksforgeeks.org/kth-smallest-largest-element-in-unsorted-array/"
        },
        {
          number: 4,
          topic: "Array",
          problem: "Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo",
          link: "https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s-dutch-national-flag-problem/"
        },
        {
          number: 5,
          topic: "Array",
          problem: "Move all the negative elements to one side of the array",
          link: "https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/"
        },
        {
          number: 6,
          topic: "Array",
          problem: "Find the Union and Intersection of the two sorted arrays.",
          link: "https://www.geeksforgeeks.org/union-and-intersection-of-two-sorted-arrays-2/"
        },
        {
          number: 7,
          topic: "Array",
          problem: "Write a program to cyclically rotate an array by one.",
          link: "https://www.geeksforgeeks.org/c-program-cyclically-rotate-array-one/"
        },
        {
          number: 8,
          topic: "Array",
          problem: "Find Largest sum contiguous Subarray [V. IMP]",
          link: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/"
        },
        {
          number: 9,
          topic: "Array",
          problem: "Minimise the maximum difference between heights [V.IMP]",
          link: "https://www.geeksforgeeks.org/minimize-the-maximum-difference-between-the-heights/"
        },
        {
          number: 10,
          topic: "Array",
          problem: "Minimum no. of Jumps to reach end of an array",
          link: "https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/"
        },
        {
          number: 11,
          topic: "Array",
          problem: "Find duplicate in an array of N+1 Integers",
          link: "https://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/"
        },
        {
          number: 12,
          topic: "Array",
          problem: "Merge 2 sorted arrays without using Extra space.",
          link: "https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space/"
        },
        {
          number: 13,
          topic: "Array",
          problem: "Kadane's Algo [V.V.V.V.V IMP]",
          link: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/"
        },
        {
          number: 14,
          topic: "Array",
          problem: "Merge Intervals",
          link: "https://www.geeksforgeeks.org/merging-intervals/"
        },
        {
          number: 15,
          topic: "Array",
          problem: "Next Permutation",
          link: "https://www.geeksforgeeks.org/next-permutation/"
        },
        {
          number: 16,
          topic: "Array",
          problem: "Count Inversion",
          link: "https://www.geeksforgeeks.org/inversion-count-in-array-using-merge-sort/"
        },
        {
          number: 17,
          topic: "Array",
          problem: "Best time to buy and Sell stock",
          link: "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/"
        },
        {
          number: 18,
          topic: "Array",
          problem: "Find all pairs on integer array whose sum is equal to given number",
          link: "https://www.geeksforgeeks.org/count-pairs-with-given-sum/"
        },
        {
          number: 19,
          topic: "Array",
          problem: "Find common elements in 3 sorted arrays",
          link: "https://www.geeksforgeeks.org/find-common-elements-three-sorted-arrays/"
        },
        {
          number: 20,
          topic: "Array",
          problem: "Rearrange the array in alternating positive and negative items with O(1) extra space",
          link: "https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/"
        },
        {
          number: 21,
          topic: "Array",
          problem: "Find if there is any subarray with sum equal to 0",
          link: "https://www.geeksforgeeks.org/find-if-there-is-a-subarray-with-0-sum/"
        },
        {
          number: 22,
          topic: "Array",
          problem: "Find factorial of a large number",
          link: "https://www.geeksforgeeks.org/factorial-large-number/"
        },
        {
          number: 23,
          topic: "Array",
          problem: "Find maximum product subarray",
          link: "https://www.geeksforgeeks.org/maximum-product-subarray/"
        },
        {
          number: 24,
          topic: "Array",
          problem: "Find longest consecutive subsequence",
          link: "https://www.geeksforgeeks.org/longest-consecutive-subsequence/"
        },
        {
          number: 25,
          topic: "Array",
          problem: "Given an array of size n and a number k, find all elements that appear more than n/k times.",
          link: "https://www.geeksforgeeks.org/find-elements-appear-n-k-times-array/"
        },
        {
          number: 26,
          topic: "Array",
          problem: "Maximum profit by buying and selling a share at most twice",
          link: "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/"
        },
        {
          number: 27,
          topic: "Array",
          problem: "Find whether an array is a subset of another array",
          link: "https://www.geeksforgeeks.org/find-whether-an-array-is-subset-of-another-array-set-1/"
        },
        {
          number: 28,
          topic: "Array",
          problem: "Find the triplet that sum to a given value",
          link: "https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/"
        },
        {
          number: 29,
          topic: "Array",
          problem: "Trapping Rain water problem",
          link: "https://www.geeksforgeeks.org/trapping-rain-water/"
        },
        {
          number: 30,
          topic: "Array",
          problem: "Chocolate Distribution problem",
        },
        
            
          {
              number: 31,
              topic: "Matrix",
              problem: "Spiral traversal on a Matrix",
              link: "https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/"
            },
            {
              number: 32,
              topic: "Matrix",
              problem: "Search an element in a matrix",
              link: "https://www.geeksforgeeks.org/search-in-a-row-wise-and-column-wise-sorted-2d-array/"
            },
            {
              number: 33,
              topic: "Matrix",
              problem: "Find median in a row wise sorted matrix",
              link: "https://www.geeksforgeeks.org/median-of-row-wise-sorted-matrix/"
            },
            {
              number: 34,
              topic: "Matrix",
              problem: "Find row with maximum no. of 1's",
              link: "https://www.geeksforgeeks.org/find-the-row-with-maximum-number-1s/"
            },
            {
              number: 35,
              topic: "Matrix",
              problem: "Print elements in sorted order using row-column wise sorted matrix",
              link: "https://www.geeksforgeeks.org/sorted-matrix/"
            },
            {
              number: 36,
              topic: "Matrix",
              problem: "Maximum size rectangle",
              link: "https://www.geeksforgeeks.org/maximum-size-rectangle-binary-sub-matrix-1s/"
            },
            {
              number: 37,
              topic: "Matrix",
              problem: "Find a specific pair in matrix",
              link: "https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/"
            },
            {
              number: 38,
              topic: "Matrix",
              problem: "Rotate matrix by 90 degrees",
              link: "https://www.geeksforgeeks.org/rotate-matrix-90-degree-without-using-extra-space-set-2/"
            },
            {
              number: 39,
              topic: "Matrix",
              problem: "Kth smallest element in a row-column wise sorted matrix",
              link: "https://www.geeksforgeeks.org/kth-smallest-element-in-a-row-wise-and-column-wise-sorted-2d-array/"
            },
            {
              number: 40,
              topic: "Matrix",
              problem: "Common elements in all rows of a given matrix",
              link: "https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/"
            },
            
    {
      number: 41,
      topic: "String",
      problem: "Reverse a String",
      link: "https://leetcode.com/problems/reverse-string/"
    },
    {
      number: 42,
      topic: "String",
      problem: "Check whether a String is Palindrome or not",
      link: "https://www.geeksforgeeks.org/c-program-check-given-string-palindrome/"
    },
    {
      number: 43,
      topic: "String",
      problem: "Find Duplicate characters in a string",
      link: "https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/"
    },
    {
      number: 44,
      topic: "String",
      problem: "Why strings are immutable in Java?",
      link: "https://www.geeksforgeeks.org/why-string-class-is-immutable-or-final-in-java/"
    },
    {
      number: 45,
      topic: "String",
      problem: "Check whether one string is a rotation of another",
      link: "https://www.geeksforgeeks.org/check-if-a-string-is-rotation-of-another-by-k-places/"
    },
    {
      number: 46,
      topic: "String",
      problem: "Check whether a string is a valid shuffle of two strings",
      link: "https://www.geeksforgeeks.org/check-if-a-string-is-a-shuffle-of-two-distinct-strings/"
    },
    {
      number: 47,
      topic: "String",
      problem: "Count and Say problem",
      link: "https://leetcode.com/problems/count-and-say/"
    },
    {
      number: 48,
      topic: "String",
      problem: "Find the longest Palindrome in a string",
      link: "https://leetcode.com/problems/longest-palindromic-substring/"
    },
    {
      number: 49,
      topic: "String",
      problem: "Find Longest Recurring Subsequence in String",
      link: "https://www.geeksforgeeks.org/longest-repeating-subsequence/"
    },
    {
      number: 50,
      topic: "String",
      problem: "Print all Subsequences of a string",
      link: "https://www.geeksforgeeks.org/print-subsequences-string/"
    },
    {
      number: 51,
      topic: "String",
      problem: "Print all the permutations of the given string",
      link: "https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/"
    },
    {
      number: 52,
      topic: "String",
      problem: "Split the Binary string into two substrings with equal 0’s and 1’s",
      link: "https://www.geeksforgeeks.org/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/"
    },
    {
      number: 53,
      topic: "String",
      problem: "Word Wrap Problem",
      link: "https://www.geeksforgeeks.org/word-wrap-problem-dp-19/"
    },
    {
      number: 54,
      topic: "String",
      problem: "EDIT Distance",
      link: "https://leetcode.com/problems/edit-distance/"
    },
    {
      number: 55,
      topic: "String",
      problem: "Find next greater number with same set of digits",
      link: "https://www.geeksforgeeks.org/find-next-greater-number-set-digits/"
    },
   
        {
          number: 56,
          topic: "Searching & Sorting",
          problem: "Find first and last positions of an element in a sorted array",
          link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"
        },
        {
          number: 57,
          topic: "Searching & Sorting",
          problem: "Find a Fixed Point (Value equal to index)",
          link: "https://www.geeksforgeeks.org/find-a-fixed-point-in-a-given-array/"
        },
        {
          number: 58,
          topic: "Searching & Sorting",
          problem: "Search in a rotated sorted array",
          link: "https://leetcode.com/problems/search-in-rotated-sorted-array/"
        },
        {
          number: 59,
          topic: "Searching & Sorting",
          problem: "Square root of an integer",
          link: "https://leetcode.com/problems/sqrtx/"
        },
        {
          number: 60,
          topic: "Searching & Sorting",
          problem: "Max and min of array using min comparisons",
          link: "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/"
        },
        {
          number: 61,
          topic: "Searching & Sorting",
          problem: "Optimum point to minimize distance",
          link: "https://www.geeksforgeeks.org/find-optimum-location-minimize-total-distance/"
        },
        {
          number: 62,
          topic: "Searching & Sorting",
          problem: "Find the repeating and the missing",
          link: "https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/"
        },
        {
          number: 63,
          topic: "Searching & Sorting",
          problem: "Find majority element",
          link: "https://leetcode.com/problems/majority-element/"
        },
        {
          number: 64,
          topic: "Searching & Sorting",
          problem: "Search in array where adjacent differ by at most k",
          link: "https://www.geeksforgeeks.org/searching-array-adjacent-differ-k/"
        },
        {
          number: 65,
          topic: "Searching & Sorting",
          problem: "Find pair with a given difference",
          link: "https://www.geeksforgeeks.org/find-a-pair-with-the-given-difference/"
        },
        {
          number: 66,
          topic: "Searching & Sorting",
          problem: "Find four elements that sum to a given value",
          link: "https://www.geeksforgeeks.org/find-four-elements-a-b-c-d-such-that-ab-cd/"
        },
        {
          number: 67,
          topic: "Searching & Sorting",
          problem: "Max sum with no 2 elements adjacent",
          link: "https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/"
        },
        {
          number: 68,
          topic: "Searching & Sorting",
          problem: "Count triplets with sum smaller than value",
          link: "https://www.geeksforgeeks.org/count-triplets-with-sum-smaller-that-a-given-value/"
        },
        {
          number: 69,
          topic: "Searching & Sorting",
          problem: "Merge 2 sorted arrays",
          link: "https://leetcode.com/problems/merge-sorted-array/"
        },
        {
          number: 70,
          topic: "Searching & Sorting",
          problem: "Print all subarrays with 0 sum",
          link: "https://www.geeksforgeeks.org/find-if-there-is-a-subarray-with-0-sum/"
        },
        {
            number: 71,
            topic: "LinkedList",
            problem: "Write a Program to reverse the Linked List. (Both Iterative and recursive)",
            link: "https://www.geeksforgeeks.org/reverse-a-linked-list/"
          },
          {
            number: 72,
            topic: "LinkedList",
            problem: "Reverse a Linked List in group of Given Size. [Very Imp]",
            link: "https://www.geeksforgeeks.org/reverse-a-list-in-groups-of-given-size/"
          },
          {
            number: 73,
            topic: "LinkedList",
            problem: "Write a program to Detect loop in a linked list.",
            link: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/"
          },
          {
            number: 74,
            topic: "LinkedList",
            problem: "Write a program to Delete loop in a linked list.",
            link: "https://www.geeksforgeeks.org/remove-loop-in-a-linked-list/"
          },
          {
            number: 75,
            topic: "LinkedList",
            problem: "Find the starting point of the loop.",
            link: "https://leetcode.com/problems/linked-list-cycle-ii/"
          },
          {
            number: 76,
            topic: "LinkedList",
            problem: "Remove Duplicates in a sorted Linked List.",
            link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/"
          },
          {
            number: 77,
            topic: "LinkedList",
            problem: "Remove Duplicates in a Un-sorted Linked List.",
            link: "https://www.geeksforgeeks.org/remove-duplicates-from-an-unsorted-linked-list/"
          },
          {
            number: 78,
            topic: "LinkedList",
            problem: "Write a Program to Move the last element to Front in a Linked List.",
            link: "https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/"
          },
          {
            number: 79,
            topic: "LinkedList",
            problem: "Add “1” to a number represented as a Linked List.",
            link: "https://www.geeksforgeeks.org/add-1-number-represented-linked-list/"
          },
          {
            number: 80,
            topic: "LinkedList",
            problem: "Add two numbers represented by linked lists.",
            link: "https://leetcode.com/problems/add-two-numbers/"
          },
          {
            number: 81,
            topic: "LinkedList",
            problem: "Intersection of two Sorted Linked List.",
            link: "https://www.geeksforgeeks.org/intersection-of-two-sorted-linked-lists/"
          },
          {
            number: 82,
            topic: "LinkedList",
            problem: "Intersection Point of two Linked Lists.",
            link: "https://leetcode.com/problems/intersection-of-two-linked-lists/"
          },
          {
            number: 83,
            topic: "LinkedList",
            problem: "Merge Sort For Linked lists.[Very Important]",
            link: "https://www.geeksforgeeks.org/merge-sort-for-linked-list/"
          },
          {
            number: 84,
            topic: "LinkedList",
            problem: "Quicksort for Linked Lists.[Very Important]",
            link: "https://www.geeksforgeeks.org/quicksort-on-singly-linked-list/"
          },
          {
            number: 85,
            topic: "LinkedList",
            problem: "Find the middle Element of a linked list.",
            link: "https://leetcode.com/problems/middle-of-the-linked-list/"
          },
          {
            number: 86,
            topic: "LinkedList",
            problem: "Check if a linked list is a circular linked list.",
            link: "https://www.geeksforgeeks.org/circular-linked-list/"
          },
          {
            number: 87,
            topic: "LinkedList",
            problem: "Split a Circular linked list into two halves.",
            link: "https://www.geeksforgeeks.org/split-a-circular-linked-list-into-two-halves/"
          },
          {
            number: 88,
            topic: "LinkedList",
            problem: "Write a Program to check whether the Singly Linked list is a palindrome or not.",
            link: "https://leetcode.com/problems/palindrome-linked-list/"
          },
          {
            number: 89,
            topic: "LinkedList",
            problem: "Deletion from a Circular Linked List.",
            link: "https://www.geeksforgeeks.org/deletion-circular-linked-list/"
          },
          {
            number: 90,
            topic: "LinkedList",
            problem: "Reverse a Doubly Linked list.",
            link: "https://www.geeksforgeeks.org/reverse-a-doubly-linked-list/"
          },
          {
            number: 91,
            topic: "Binary Trees",
            problem: "Level order traversal",
            link: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
          },
          {
            number: 92,
            topic: "Binary Trees",
            problem: "Reverse Level Order traversal",
            link: "https://www.geeksforgeeks.org/reverse-level-order-traversal/"
          },
          {
            number: 93,
            topic: "Binary Trees",
            problem: "Height of a tree",
            link: "https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/"
          },
          {
            number: 94,
            topic: "Binary Trees",
            problem: "Diameter of a tree",
            link: "https://leetcode.com/problems/diameter-of-binary-tree/"
          },
          {
            number: 95,
            topic: "Binary Trees",
            problem: "Mirror of a tree",
            link: "https://www.geeksforgeeks.org/create-a-mirror-tree-from-the-given-binary-tree/"
          },
          {
            number: 96,
            topic: "Binary Trees",
            problem: "Inorder Traversal of a tree both using recursion and Iteration",
            link: "https://leetcode.com/problems/binary-tree-inorder-traversal/"
          },
          {
            number: 97,
            topic: "Binary Trees",
            problem: "Preorder Traversal of a tree both using recursion and Iteration",
            link: "https://leetcode.com/problems/binary-tree-preorder-traversal/"
          },
          {
            number: 98,
            topic: "Binary Trees",
            problem: "Postorder Traversal of a tree both using recursion and Iteration",
            link: "https://leetcode.com/problems/binary-tree-postorder-traversal/"
          },
          {
            number: 99,
            topic: "Binary Trees",
            problem: "Left View of a tree",
            link: "https://www.geeksforgeeks.org/left-view-binary-tree/"
          },
          {
            number: 100,
            topic: "Binary Trees",
            problem: "Right View of Tree",
            link: "https://www.geeksforgeeks.org/right-view-binary-tree/"
          },
          {
            number: 101,
            topic: "Binary Search Trees",
            problem: "Search in a Binary Search Tree",
            link: "https://leetcode.com/problems/search-in-a-binary-search-tree/"
          },
          {
            number: 102,
            topic: "Binary Search Trees",
            problem: "Delete a Node in BST",
            link: "https://leetcode.com/problems/delete-node-in-a-bst/"
          },
          {
            number: 103,
            topic: "Binary Search Trees",
            problem: "Find LCA of two nodes",
            link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
          },
          {
            number:104,
            topic: "Binary Search Trees",
            problem: "Construct BST from preorder traversal",
            link: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/"
          },
          {
            number: 105,
            topic: "Binary Search Trees",
            problem: "Convert Sorted Array to BST",
            link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/"
          },
          {
            number: 106,
            topic: "Greedy",
            problem: "Activity Selection Problem",
            link: "https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/"
          },
          {
            number: 107,
            topic: "Greedy",
            problem: "Fractional Knapsack",
            link: "https://www.geeksforgeeks.org/fractional-knapsack-problem/"
          },
          {
            number: 108,
            topic: "Greedy",
            problem: "Job Sequencing Problem",
            link: "https://www.geeksforgeeks.org/job-sequencing-problem/"
          },
          {
            number: 109,
            topic: "Greedy",
            problem: "Huffman Encoding",
            link: "https://www.geeksforgeeks.org/huffman-coding-greedy-algo-3/"
          },
          {
            number: 110,
            topic: "Greedy",
            problem: "Minimum Platforms Problem",
            link: "https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1"
          },
          {
            number: 111,
            topic: "BackTracking",
            problem: "Rat in a maze Problem",
            link: "https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/"
          },
          {
            number: 112,
            topic: "BackTracking",
            problem: "Printing all solutions in N-Queen Problem",
            link: "https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/"
          },
          {
            number: 113,
            topic: "BackTracking",
            problem: "Word Break Problem using Backtracking",
            link: "https://www.geeksforgeeks.org/word-break-problem-using-backtracking/"
          },
          {
            number: 114,
            topic: "BackTracking",
            problem: "Remove Invalid Parentheses",
            link: "https://leetcode.com/problems/remove-invalid-parentheses/"
          },
          {
            number: 115,
            topic: "BackTracking",
            problem: "Sudoku Solver",
            link: "https://leetcode.com/problems/sudoku-solver/"
          },
          {
            number: 116,
            topic: "BackTracking",
            problem: "m Coloring Problem",
            link: "https://www.geeksforgeeks.org/m-coloring-problem/"
          },
          {
            number: 117,
            topic: "BackTracking",
            problem: "Print all palindromic partitions of a string",
            link: "https://www.geeksforgeeks.org/given-a-string-print-all-possible-palindromic-partition/"
          },
          {
            number: 118,
            topic: "BackTracking",
            problem: "Subset Sum Problem",
            link: "https://www.geeksforgeeks.org/subset-sum-problem-dp-25/"
          },
          {
            number: 119,
            topic: "BackTracking",
            problem: "The Knight’s tour problem",
            link: "https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/"
          },
          {
            number: 120,
            topic: "BackTracking",
            problem: "Tug of War",
            link: "https://www.geeksforgeeks.org/tug-of-war/"
          },
          {
            number: 121,
            topic: "BackTracking",
            problem: "Find shortest safe route in a path with landmines",
            link: "https://www.geeksforgeeks.org/find-shortest-safe-route-in-a-path-with-landmines/"
          },
          {
            number: 122,
            topic: "BackTracking",
            problem: "Combinational Sum",
            link: "https://www.geeksforgeeks.org/combinational-sum/"
          },
          {
            number: 123,
            topic: "BackTracking",
            problem: "Find Maximum number possible by doing at-most K swaps",
            link: "https://www.geeksforgeeks.org/find-maximum-number-possible-by-doing-at-most-k-swaps/"
          },
          {
            number: 124,
            topic: "BackTracking",
            problem: "Print all permutations of a string",
            link: "https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/"
          },
          {
            number: 125,
            topic: "BackTracking",
            problem: "Find if there is a path of more than k length from a source",
            link: "https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/"
          },
          {
            number: 126,
            topic: "BackTracking",
            problem: "Longest Possible Route in a Matrix with Hurdles",
            link: "https://www.geeksforgeeks.org/longest-possible-route-in-a-matrix-with-hurdles/"
          },
          {
            number: 127,
            topic: "BackTracking",
            problem: "Print all possible paths from top left to bottom right of a mXn matrix",
            link: "https://www.geeksforgeeks.org/print-all-possible-paths-from-top-left-to-bottom-right-of-a-mxn-matrix/"
          },
          {
            number: 128,
            topic: "BackTracking",
            problem: "Partition of a set intoK subsets with equal sum",
            link: "https://www.geeksforgeeks.org/partition-set-k-subsets-equal-sum/"
          },
          {
            number: 129,
            topic: "BackTracking",
            problem: "Find the K-th Permutation Sequence of first N natural numbers",
            link: "https://leetcode.com/problems/permutation-sequence/"
          },
          {
            number: 130,
            topic: "Stacks & Queues",
            problem: "Implement Stack from Scratch",
            link: "https://www.geeksforgeeks.org/stack-data-structure/"
          },
          {
            number: 131,
            topic: "Stacks & Queues",
            problem: "Implement Queue from Scratch",
            link: "https://www.geeksforgeeks.org/queue-data-structure/"
          },
          {
            number: 132,
            topic: "Stacks & Queues",
            problem: "Implement 2 stack in an array",
            link: "https://www.geeksforgeeks.org/implement-two-stacks-in-an-array/"
          },
          {
            number: 133,
            topic: "Stacks & Queues",
            problem: "Find the middle element of a stack",
            link: "https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/"
          },
          {
            number: 134,
            topic: "Stacks & Queues",
            problem: "Implement \"N\" stacks in an Array",
            link: "https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/"
          },
      


          
  ];
  
  // Populate the table
  const tableBody = document.getElementById("tableBody");
  
  function renderTable(data) {
    tableBody.innerHTML = "";
    data.forEach((q) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${q.number}</td>
        <td>${q.topic}</td>
        <td>${q.problem}</td>
        <td><a href="${q.link}" target="_blank">Link</a></td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Search functionality
  document.getElementById("searchInput").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const filtered = dsaQuestions.filter(q =>
      q.problem.toLowerCase().includes(value) ||
      q.topic.toLowerCase().includes(value)
    );
    renderTable(filtered);
  });
  
  // Initial render
  renderTable(dsaQuestions);
   