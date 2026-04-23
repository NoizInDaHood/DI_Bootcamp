"""What You will learn :
Python Basics
Conditionals
Loops
Functions


Instructions
Here is a python code that generates a list of 20000 random numbers, called list_of_numbers, and a target number.

import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number   = 3728


Copy this code, and create a program that finds, within list_of_numbers all the pairs of number that sum to the target number

For example

1000 and 2728 sums to the target_number 3728
1864 and 1864 sums to the target_number 3728


One Last Thing: Good luck!"""

import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number   = 3728

def find_pairs(target_number, list_of_numbers):
   n = len(list_of_numbers)
   for i in range(n):
      first_number = list_of_numbers[i]
      for y in range(i+1,n):
         second_number = list_of_numbers[y]
         if first_number + second_number == target_number:
            print(f"The number {first_number} and the number {second_number} sums up to a total of {target_number}.\nCongrats you fond a pair!")

find_pairs(target_number, list_of_numbers)      
   


