def list_check(lst):
    """Are all items in lst a list?

        >>> list_check([[1], [2, 3]])
        True

        >>> list_check([[1], "nope"])
        False
    """
    for itm in lst:
        print(itm)
        if isinstance(itm, list):
            continue
        else:
            return False
    return True
        
test = list_check([[1],[2,3,4],['a'], 2 ])

print(test)
