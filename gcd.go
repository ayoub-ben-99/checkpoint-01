package main

import "fmt"

// تحسب القاسم المشترك الأكبر بين a و b
func Gcd(a, b int) {
	for b != 0 {
		a, b = b, a%b
	}
	fmt.Println(a)
}
