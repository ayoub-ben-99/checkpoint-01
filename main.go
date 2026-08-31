package main

import (
	"fmt"
	"mygo/level5"
)

func main() {
	fmt.Println(level5.Chunk([]int{}, 10))
	fmt.Println(level5.Chunk([]int{0, 1, 2, 3, 4, 5, 6, 7}, 0))
	fmt.Println(level5.Chunk([]int{0, 1, 2, 3, 4, 5, 6, 7}, 5))
	fmt.Println(level5.Chunk([]int{0, 1, 2, 3, 4, 5, 6, 7}, 3))
	fmt.Println(level5.Chunk([]int{0, 1, 2, 3, 4, 5, 6, 7}, 4))
}
