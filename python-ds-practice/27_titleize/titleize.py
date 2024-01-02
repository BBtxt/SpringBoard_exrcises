def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    freaked = ""
    txt = phrase.split()
    for word in txt:
        word[0].upper()
        freaked += f"{word[0].upper() + word[1:]} "
    return freaked.strip()

test = titleize('this is awesome')
