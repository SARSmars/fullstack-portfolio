package main

import "fmt"

func main() {
	var myName = "sar"
	fmt.Println("Hello, " + myName)
	var name string = myName
	fmt.Println("Hello, " + name)
	
	userName := "Cindy"
	fmt.Println("Hello, " + userName)

	// Uninitialised variable
	var sum int
	fmt.Println("Sum is:", sum)

	part1, other := 10, 20
	fmt.Println("Part1:", part1, "other:", other)

	part2, other := 30, 40
	fmt.Println("Part2:", part2, "other:", other)

	sum = part1 + part2
	fmt.Println("Sum is:", sum)

	var(
		lessonName = "Variables in Go"
		lessonType = "Demo"
	)
	fmt.Println(lessonName, lessonType)

	// Multiple variable declaration
	word1, word2, _ := "Hello", "World", "!"
	fmt.Println(word1, word2)

}
