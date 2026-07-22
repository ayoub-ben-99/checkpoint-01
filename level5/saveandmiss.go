package level5

import "fmt"

func SaveAndMiss(items []int) {
	save := 0
	miss := 0
	for i := 0; i < len(items)-1; i++ {
		if items[i] > items[1+i] {
			save++
		} else {
			miss++
		}
	}
	fmt.Printf("save:%d , miss:%d\n", save, miss)
}
