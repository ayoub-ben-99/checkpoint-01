package main

import "fmt"

func Countalpha(str string) {
	count := 0
	for _, v := range str {
		if v >= 'a' && v <= 'z' || v >= 'A' && v <= 'Z' {
			count++
		}
	}
	fmt.Println(count)
}
