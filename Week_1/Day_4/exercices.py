""" Instructions:

Create a set called my_fav_numbers and populate it with your favorite numbers.
Add two new numbers to the set.
Remove the last number you added to the set.
Create another set called friend_fav_numbers and populate it with your friend’s favorite numbers.
Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
Note: Sets are unordered collections, so ensure no duplicate numbers are added."""

my_fave_numbers = {1,5,9}
my_fave_numbers.add(3)
print(my_fave_numbers)
my_fave_numbers.add(15)
print(my_fave_numbers)

my_fave_numbers.remove(15)
print(my_fave_numbers)

friend_fav_numbers = {1,15,9,7}
print(friend_fav_numbers)

our_fav_numbers = my_fave_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

"""Exercise 2: Tuple
Key Python Topics:

Tuples (immutability)


Instructions:

Given a tuple of integers, try to add more integers to the tuple.
Hint: Tuples are immutable, meaning they cannot be changed after creation. Think about why you can’t add more integers to a tuple."""

my_tuple = (1, 2, 3)

try:    my_tuple.append(4) # This will raise an AttributeError because tuples do not have an append method. its imutable#

"""Exercise 3: List Manipulation
Key Python Topics:

Lists
List methods: append, remove, insert, count, clear


Instructions:

You have a list: basket = ["Banana", "Apples", "Oranges", "Blueberries"]
Remove "Banana" from the list.
Remove "Blueberries" from the list.
Add "Kiwi" to the end of the list.
Add "Apples" to the beginning of the list.
Count how many times "Apples" appear in the list.
Empty the list.
Print the final state of the list."""

basket = ["Banana", "Apple", "Oranges", "Blueberries"]
print(basket)
basket.remove("Banana")
basket.remove("Blueberries")
basket.insert(0, "Apple")
basket.append("Kiwi")
print(basket)
print(basket.count("Apple"))
basket.clear()
print(basket)


""" Exercice Lists
Floats and integers
Range generation


Instructions:

Recap: What is a float? What’s the difference between a float and an integer?
Create a list containing the following sequence of mixed types: floats and integers:
1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.
Avoid hard-coding each number manually.
Think: Can you generate this sequence using a loop or another method? """

# integer are round numbers when float are for not rounded numbers kind of data
my_list = []
for i in range(1, 6):
    my_list.append(i + 0.5) # I use the append method to add the numbers to the list and I add 0.5 to each integer to get the float numbers. #

print(my_list) #with the use of range I'm not able to get the integers numbers only the float this is an issue for the exercie.

# i can use an other method with while loop to get both the integers and the floats numbers in the list. # 

my_list2 = []
sequenced_number = 1.5

while sequenced_number <= 5:
    if sequenced_number.is_integer():
        my_list2.append(int(sequenced_number))# I use the is_integer method to check if the number is an integer and if it is, I add it to the list as an integer. #
    else:
        my_list2.append(sequenced_number) # if the number is not an integer, I add it to the list as a float. #
    sequenced_number += 0.5

print(my_list2)

""" Exercise 5: For Loop
Key Python Topics:

Loops (for)
Range and indexing


Instructions:

Write a for loop to print all numbers from 1 to 20, inclusive.
Write another for loop that prints every number from 1 to 20 where the index is even."""

for i in range(1,21):
    print i

for x in range(1,21):
    if x % 2 == 0:
        print(x)



