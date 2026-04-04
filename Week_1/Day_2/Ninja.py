

highest_record = 0

print("--- The 'No-A' Challenge ---")
print("Type the longest sentence you can without using the letter 'A'!")

while True:
    sentence = input("\nEnter your sentence: ")

    if "exit" in sentence.lower():
        print("Thanks for playing! Goodbye!")
        break
    if "a" in sentence.lower():
        print(f"Game Over! Your sentence contained the letter 'A'.")
        print(f"Final High Score: {highest_record}")
        continue

    current_length = len(sentence.strip())
    
    if current_length > highest_record:
        highest_record = current_length
        print(f"New Record! {highest_record} characters!")
    else:
        print(f"Solid effort ({current_length} chars), but you didn't beat {highest_record}.")

        