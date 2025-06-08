//Summary:
//  Print basic information to the terminal using various variable
//  creation techniques. The information may be printed using any
//  formatting you like.
//
//Requirements:
//* Store your favorite color in a variable using the `var` keyword
//* Store your birth year and age (in years) in two variables using
//  compound assignment
//* Store your first & last initials in two variables using block assignment
//* Declare (but don't assign!) a variable for your age (in days),
//  then assign it on the next line by multiplying 365 with the age
// 	variable created earlier
//
//Notes:
//* Use fmt.Println() to print out information
//* Basic math operations are:
//    Subtraction    -
// 	  Addition       +
// 	  Multiplication *
// 	  Division       /

package main

import "fmt"

func main() {
	favouriteColor := "blue" // Using short variable declaration
	fmt.Println("Favourite Color: ", favouriteColor, "\n")
	var birthYear, age = 1990, 33 // Using compound assignment
	fmt.Println("Birth Year: ", birthYear, ", Age: ", age, "\n")
	var(
		firstInitial, lastInitial = "J", "D" // Using block assignment
	)
	fmt.Println("Initials: ", firstInitial, lastInitial, "\n")
	
	var ageInDays int // Declaring a variable without assignment
	ageInDays = age * 365 // Assigning value by multiplying age with 365
	fmt.Println("Age in Days: ", ageInDays, "\n")

}

