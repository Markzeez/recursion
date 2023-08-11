//Javascript on Recursion



def is_palindrome(word):
    # Base case: An empty word or a word with a single character is a palindrome
    if len(word) <= 1:
        return True

    # Compare the first and last characters
    if word[0] == word[-1]:
        # Recursive case: Test the rest of the word
        return is_palindrome(word[1:-1])
    else:
        return False

# Test cases
print(is_palindrome("gag"))     # True
print(is_palindrome("kayak"))   # True
print(is_palindrome("php"))     # True
print(is_palindrome("radar"))   # True
print(is_palindrome("hello"))   # False
