

highest_record = 0
#introduction to the game and instructions for the user.
print("\n--- The 'No-A' Challenge ---")
print("\n\nType the longest sentence you can without using the letter 'A'!")
# create the infinite loop to keep game running until user types "exit"
while True:
    #I use the lower method to make sure that the game is not case sensistive when typing the letter a or exit
    sentence = input("\nEnter your sentence: ")

    if sentence.lower() == "exit":
        print("Thanks for playing! Goodbye!")
        break
    if "a" in sentence.lower():
        print(f"\n\nGame Over! Your sentence contained the letter 'A'.")
        print(f"\nFinal High Score: {highest_record}")
        print("\n\nTry again to beat the highest score!\nOr type 'exit' to quit.")
        continue #i first used break to end but then I realized that I wanted to give the user the option to play again, so I replaced it with continue to restart the loop and let the user try again.

    current_length = len(sentence.strip()) #I use the strip method to remove empty spaces at the beginnign and the end of sentences
    
    if current_length > highest_record:
        highest_record = current_length #I update the highest score if current lenght is greater than the highest score
        print(f"\n\nNew Record! {highest_record} characters!")
        print("\n\nTry again to beat the highest score!\nOr type 'exit' to quit.")
    else:
        print(f"\n\nSolid effort ({current_length} chars), but you didn't beat {highest_record}.")
        print("\n\nTry again to beat the highest score!\nOr type 'exit' to quit.")

    

        