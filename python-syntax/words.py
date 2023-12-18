def print_upper_words(words, must_start_with=['a', 'e', 'i', 'o', 'u']):
    """Print out each word on a separate line, but in all uppercase."""
    for word in words:
        if word[0] in must_start_with:
            print(word.upper())



test = ['hello', 'world', 'spam', 'eggs', 'apple']

print_upper_words(test)
