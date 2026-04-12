""" Key Python Topics:
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