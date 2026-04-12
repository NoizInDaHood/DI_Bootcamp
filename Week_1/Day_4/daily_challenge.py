"""Challenge 1: Multiples of a Number


Key Python Topics:
input() function
Loops (for or while)
Lists and appending items
Basic arithmetic (multiplication)


Instructions:
1. Ask the user for two inputs:

A number (integer).
A length (integer).
2. Create a program that generates a list of multiples of the given number.
3. The list should stop when it reaches the length specified by the user."""

number = input("\nPlease type a number: ")
lenght = input("\nPlease type the lenght: ")

multiples = []
for i in range(1, int(lenght) + 1):
    multiples.append(int(number) * i) # I use a for loop to iterate from 1 to the length specified by the user. In each iteration, I calculate the multiple of the number by multiplying it with the current value of i and append it to the multiples list. #
print(multiples)


""" Challenge2: Remove Consecutive Duplicates


Key Python Topics:
input() function
Strings and string manipulation
Loops (for or while)
Conditional statements (if)


Instructions:
1. Ask the user for a string.
2. Write a program that processes the string to remove consecutive duplicate letters.

The new string should only contain unique consecutive letters.
For example, “ppoeemm” should become “poem” (removes consecutive duplicates like ‘pp’, ‘ee’, and ‘mm’).
3. The program should print the modified string. """

user_string = input("\nPlease type any word or sentence: ")


def remove_duplicate(): 
    internal_result = []
    for i in range(len(user_string) - 1):
        if user_string[i] == user_string[i+1]:
            continue
        else:
            internal_result.append(user_string[i])
    internal_result.append(user_string[-1])
    string_result = "".join(internal_result)
    return string_result

cleaned_string = remove_duplicate()
print(cleaned_string)
user_string = input("\nPlease type any word or sentence: ")
cleaned_string = remove_duplicate()
print(cleaned_string)

