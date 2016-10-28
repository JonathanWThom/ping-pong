# _Ping Pong_

#### _Web application that returns numbers to users, replacing some with "ping," "pong," or "pingpong." There is also a secondary page where users can submit their own parameters. 10.28.16_

#### By _**Jonathan Thom**_

## Description

_The user inputs any positive integer and is then returned a list of all positive integers less than or equal to that number. Every number divisible by 3 is replaced with "ping," every number divisible by 5 is replaced with "pong," and every number divisible by both 3 and 5 is replaced with "pingpong." There is also a linked "Choose Your Own Adventure" page where in addition to setting their top number, users can set the divisors (e.g. 4 and 17 instead of 3 and 5) as well as their placeholders ("java" and "script" instead of "ping" and "pong")._

## Setup/Installation Requirements

* _View here: https://jonathanwthom.github.io/ping-pong/_
* _Works in any modern web browser._

## Specifications

1. User can input number and receive all positive integers leading up to that number.
  * <b>Example Input:</b> 5
  * <b>Example Output:</b> 1, 2, 3, 4, 5

2. User cannot enter numbers less than 1.
  * <b>Example Input:</b> -1
  * <b>Example Output:</b> "Please enter a positive integer"

3. User cannot enter non-integers.
  * <b>Example Input:</b> 7.5
  * <b>Example Output:</b> "Please enter a valid value"

4. User cannot enter non-numeric characters or letters.
  * <b>Example Input:</b> $
  * <b>Example Output:</b> (Doesn't work)

5. User can input number and receive all positive integers leading up to that number, with all numbers divisible by 15 replaced with "pingpong."
  * <b>Example Input:</b> 30
  * <b>Example Output:</b> "....14, pingpong, 16....28, 29, pingpong"

6. User can input number and receive all positive integers leading up to that number, with all numbers divisible by 5, but which are NOT also divisible by 15 replaced with "pong."
  * <b>Example Input:</b> 30
  * <b>Example Output:</b> "....9, pong, 10, 11, 12, 13, 14, pingpong, 16... etc."

7. User can input number and receive all positive integers leading up to that number, with all numbers divisible by 3, but which are NOT also divisible by 15 replaced with "ping". Rule 6 also applies here.
  * <b>Example Input:</b> 30
  * <b>Example Output:</b> "...8, ping, pong, 11, ping, 13, 14, pingpong, 16...etc"

8. User can input a new number into page without refreshing, and receive a new result.
  * <b>Example Input:</b> 5, submit, 4, submit
  * <b>Example Output:</b> "1, 2, ping, 4, 5", then, "1, 2, ping, 4"_

9. On second, linked page, user can enter what divisors they'd like to use. All previous steps are repeated. Empty divisor fields mean that all numbers are returned.
  * <b>Example Input:</b> Divisor 1 = 2, Divisor 2 = 5
  * <b>Example Output:</b> "1, ping, 3, ping, pong, ping, 7, ping, 9, pingpong, 11...etc."

10. On second, linked page, user can enter what they'd like to name their placeholders. All previous steps are repeated. Placeholders must be entered.
  * <b>Example Input:</b> Divisor 1 = 2, Divisor 2 = 5, Divisor 1 Name = "java", Divisor 2 = "script"
  * <b>Example Output:</b> "1, java, 3, java, script, java, 7, java, 9, javascript, 11...etc."

## Support and contact details

_Contact Jonathan at: jonathan.thom1990@gmail.com_

## Technologies Used

_Written with HTML, CSS (+Bootstrap), and Javascript (+jQuery)._

### License

*MIT*

Copyright (c) 2016 **_Jonathan Thom_**
