package main

import (
	"fmt"
	"mygo/level5"
)

func main() {
	fmt.Println(level5.ConcatAlternate([]int{1, 2, 3}, []int{4, 5, 6}))
	fmt.Println(level5.ConcatAlternate([]int{2, 4, 6, 8, 10}, []int{1, 3, 5, 7, 9, 11}))
	fmt.Println(level5.ConcatAlternate([]int{1, 2, 3}, []int{4, 5, 6, 7, 8, 9}))
	fmt.Println(level5.ConcatAlternate([]int{1, 2, 3}, []int{}))
}
