# berlin_clock
# Bidi Khalil and Boubacar Bah  
# num_groupe : 33

## Berlin Clock 
# This project is an implementation of the Berlin Clock, a well-known kata used to practice test-driven development (TDD) and to demonstrate time-based #logic. The Berlin Clock is a unique way to represent time using lights arranged in rows, where each light represents a specific time unit.
# Berlin Clock

## Overview

# The Berlin Clock represents time with a series of lights:

# - Top light: Represents seconds, toggling every two seconds.
# - Second row: Represents 5-hour blocks with four red lights.
# - Third row: Represents single-hour blocks with four red lights.
# - Fourth row: Represents 5-minute blocks, with eleven lights (3rd, 6th, and 9th lights are red to mark quarters).
# - Bottom row: Represents single-minute blocks with four yellow lights.

# The clock converts a traditional digital time input into this format using color-coded lights.

## Features

# - Seconds Light: Alternates between on (red) and off every second.
# - 5-Hour Row: Shows the number of complete 5-hour blocks in red lights.
# - Single-Hour Row: Shows the remaining hours after 5-hour blocks in red lights.
# - 5-Minute Row: Shows the number of complete 5-minute blocks with yellow and red lights (red for quarter hours).
# - Single-Minute Row: Shows the remaining minutes after 5-minute blocks in yellow lights.

## Code Structure

### Main Class (Main)

# The Main class includes functions to convert hours, minutes, and seconds into the Berlin Clock format:
# - `clockSingleMinute(minutes)`: Converts single-minute units into the bottom row format.
# - `clock5Minutes(minutes)`: Converts 5-minute units into the fourth row format, highlighting quarters.
# - `clockSingleHour(hour)`: Converts single-hour units into the third row format.
# - `clock5Hour(hour)`: Converts 5-hour units into the second row format.
# - `clockSecond(second)`: Toggles the top light every second.
