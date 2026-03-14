package level3

import "fmt"

func Firstword(word string) {
	newWord := ""
	for _, v := range word {
		newWord += string(v)
		if v == ' ' {
			break
		}
	}
	fmt.Println(newWord)
}
