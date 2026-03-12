package main

import "fmt"

func ExpandStr(str string) {
	newStr := ""
	for _, v := range str {
		if v <= '9' && v >= '0' {
			for i := '0'; i < v; i++ {
				newStr += " "
			}
		} else {
			newStr += string(v)
		}
	}
	fmt.Println(newStr)
}
