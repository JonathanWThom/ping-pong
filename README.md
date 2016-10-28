Specifications

1. User can input number and receive all positive integers leading up to that number.
- Example Input: 5
- Example Output: 1, 2, 3, 4, 5

2. User cannot enter numbers less than 1.
- Example Input: -1
- Example Output: "Please enter a positive integer"

3. User cannot enter non-integers.
- Example Input: 7.5
- Example Output: "Please enter a positive integer"

4. User cannot enter non-numeric characters or letters.
- Example Input: $
- Example Output: "Please enter a positive integer"

5. User can input number and receive all positive integers leading up to that number, with all numbers divisible by 15 replaced with "pingpong".
- Example Input: 30
- Example Output: "....14, pingpong, 15....28, 29, pingpong"

6. User can input number and recieve all positive integers leading up to that number, with all numbers divisible by 5, but which are NOT also divisible by 15 replaced with "pong".
- Example Input: 30
- Example Output "....9, pong, 10, 11, 12, 13, 14, pingpong, 16... etc."

7. User can input number and recieve all positive integers leading up to that number, with all numbers divisible by 3, but which are NOT also divisible by 15 replaced with "ping". Rule 6 also applies here.
- Example Input: 30
- Example Output: "...8, ping, 9, pong, 10, 11, ping, 13, 14, pingpong, 16...etc"

8. User can input a new number into page without refreshing, and receive a new result.
- Example Input: 5, submit, 4 submit
- Example Output: "1, 2, 3, 4, 5", then, "1, 2, 3, 4"
