""" Exercise 1: Hello World
Instructions
Print the following output using one line of code: 
Hello world
Hello world
Hello world
Hello world. """
# I use /n to print the string in a new line and I multiply it by 4 to print it 4 times #

print("Hello World\n" * 4)


""" Exercise 2: Some Math
Instructions
Write code that calculates the result of:
(99^3)*8 (meaning 99 to the power of 3, times 8)."""
# I use the ** operator to calculate the power and the * operator to multiply the result by 8 #

operation = (99 ** 3) * 8
print(operation)


""" Exercise 3: What is the output?

Predict the output of the following code snippets:
Coment what is your guess, then run the code and compare
Example: >>> 15 < 8 #False


>>> 5 < 3 #False >>>> 5 is not less than 3
>>> 3 == 3 #True >>>> 3 is equal to 3
>>> 3 == "3" #Error >>>> 3 is an integer and "3" is a string, they cant be compared
>>> "3" > 3 #Error >>>> "3" is a string and 3 is an integer, they cant be compared
>>> "Hello" == "hello" #false >>>> "Hello" and "hello" are different strings because of the capital H and the lower case h

"""

print(5 < 3)
print(3 == 3)
try:
   print(3 == "3")
except: print("Error: cannot compare an integer and a string")
try:
    print("3" > 3)
except: print("Error: cannot compare an integer and a string")
print("Hello" == "hello")

# I was wrong about the comparison between an integer and a string, it does not give an error but it gives false because they are different types of data. #

"""Exercise 4: Your computer brand
Instructions
Create a variable called computer_brand which value is the brand name of your computer.
Using the computer_brand variable, print a sentence that states the following:
"I have a <computer_brand> computer."""

computer_brand = "Apple"
# I use an f-string to insert the value of the computer_brand variable into the sentence. #
print(f"I have a {computer_brand} computer.")

"""  Exercise 5: Your information
Instructions
Create a variable called name, and set it’s value to your name.
Create a variable called age, and set it’s value to your age.
Create a variable called shoe_size, and set it’s value to your shoe size.
Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2, and 3.
Have your code print the info message.
Run your code."""

name = "Zion"
age = 25
shoe_size = 43
info = f"Hi, I'm {name}, I'm {age} years old, and my shoe size is {shoe_size}."
print(info)

"""Exercise 6: A & B
Instructions
Create two variables, a and b.
Each variable’s value should be a number.
If a is bigger than b, have your code print "Hello World".
"""
# I use a if statement to compare the values of a and b, if a is bigger than b, it will print "Hello World". #
a = 10
b = 5
if a > b:
    print("Hello World")

""" Exercise 7: Odd or Even
Instructions
Write code that asks the user for a number and determines whether this number is odd or even"""

# I use the input to ask for the age and also I make sure it is an integer by using the int() function.#
# I use an if statement to check if the age is even or odd by using the modulus operator %. #

age = int(input("What is your age? "))
if age % 2 == 0:
    print("Your age is even.")
else:
    print("Your age is odd.")

""" Exercise 8: What is the output?
Write code that asks the user for their name and determines whether or not you have the same name. 
Print out a funny message based on the outcome."""

my_name = "Zion"
user_name = input("Whats your name? ")

# I use an if statement to compare the value of user_name with my_name, if they are the same #

if user_name == my_name:
    print("Wow, we have the same name! What are the odds?")
else:    print(f"Sorry {user_name} ! Your name sucks!")

""" Exercise 9: Tall enough to ride a roller coaster
Instructions    Write code that will ask the user for their height in centimeters.
If they are over 145 cm, print a message that states they are tall enough to ride.
If they are not tall enough, print a message that says they need to grow some more to ride."""

# As usual I use the int function to make sure the input is an integer #
size = int(input("What's your height in cm? "))
# then a simple if statement for checking the size and depending on the outcone it will print the good message #
if size > 145:
    print("You are tall enough to ride the roller coaster!")
else:
    print("You need to grow some more to ride the roller coaster.")