package main

import "fmt"
// تطبع الأعداد من a إلى b
func FromTo(a, b int) {
	for i := a; i <= b; i++ {
		fmt.Print(i)
		fmt.Print(" ")
	}
	fmt.Println()
}
