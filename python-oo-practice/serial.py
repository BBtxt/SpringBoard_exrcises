"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start):
        """
        Initializes an instance of the class.

        Parameters:
            start (type): The starting value for the instance.

        Returns:
            None
        """
        self.start = start
        self.base = start
    def __repr__(self):
        """
        Returns a string representation of the instance.

        Parameters:
            None

        Returns:
            str: A string representation of the instance.
        """
        return f"<SerialGenerator start={self.start}>"
    def generate(self):
        """
        Increments the value of `self.start` by 1 and returns the original value of `self.start`.

        Returns
        int: The original value of `self.start` before incrementing.
        """
        self.start += 1
        return self.start - 1

    def reset(self):
        """
        Resets the value of the 'start' attribute to the initial value of the 'base' attribute.

        Parameters:
            None

        Returns:
            None
        """
        self.start = self.base




