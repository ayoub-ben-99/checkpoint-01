package main

import "fmt"

func Gcd(a, b int) {
	for b != 0 {
		a, b = b, a
	}
	fmt.Println(a)
}
