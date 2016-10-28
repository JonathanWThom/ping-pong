# _Ping Pong_

#### _Web application that returns numbers to users, replacing some with "ping," "pong," or "pingpong." 10.28.16_

#### By _**Jonathan Thom**_

## Description

_The user inputs any positive integer and is then returned a list of all positive integers less than or equal to that number. Every number divisible by 3 is replaced with "ping," every number divisible by 5 is replaced with "pong," and every number divisible by both 3 and 5 is replaced with "pingpong."_

## Setup/Installation Requirements

* _View here: https://jonathanwthom.github.io/ping-pong/_
* _Works in any modern web browser._

## Specifications

1. User can input number and receive all positive integers leading up to that number.
* **Example Input:** 5
* **Example Output:** 1, 2, 3, 4, 5

2. User cannot enter numbers less than 1.
- **Example Input:** -1
- **Example Output:** "Please enter a positive integer"

3. User cannot enter non-integers.
- **Example Input:** 7.5
- **Example Output:** "Please enter a valid value"

4. User cannot enter non-numeric characters or letters.
- **Example Input:** $
- **Example Output:** (Doesn't work)

5. User can input number and receive all positive integers leading up to that number, with all numbers divisible by 15 replaced with "pingpong."
- **Example Input:** 30
- **Example Output:** "....14, pingpong, 16....28, 29, pingpong"

6. User can input number and receive all positive integers leading up to that number, with all numbers divisible by 5, but which are NOT also divisible by 15 replaced with "pong."
- **Example Input:** 30
- **Example Output:** "....9, pong, 10, 11, 12, 13, 14, pingpong, 16... etc."

7. User can input number and receive all positive integers leading up to that number, with all numbers divisible by 3, but which are NOT also divisible by 15 replaced with "ping". Rule 6 also applies here.
- **Example Input:** 30
- **Example Output:** "...8, ping, pong, 11, ping, 13, 14, pingpong, 16...etc"

8. User can input a new number into page without refreshing, and receive a new result.
- **Example Input:** 5, submit, 4, submit
- **Example Output:** "1, 2, ping, 4, 5", then, "1, 2, ping, 4"_

## Support and contact details

_Contact Jonathan at: jonathan.thom1990@gmail.com_

## Technologies Used

_Written with HTML, CSS (+Bootstrap), and Javascript (+jQuery)._

### License

*MIT*

Copyright (c) 2016 **_Jonathan Thom_**
