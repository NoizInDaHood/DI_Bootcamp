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