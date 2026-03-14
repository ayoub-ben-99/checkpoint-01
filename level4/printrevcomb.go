package level4

import "fmt"

func PrintRevComb() {
    for i := 9; i >= 2; i-- {
        for j := i - 1; j >= 1; j-- {
            for k := j - 1; k >= 0; k-- {
                fmt.Printf("%d%d%d\n", i, j, k)
            }
        }
    }
}
