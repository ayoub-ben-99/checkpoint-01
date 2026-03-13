package main

import "fmt"

func PrintMemory(data []byte) {
	for i := 0; i < len(data); i += 16 {
		// العنوان
		fmt.Printf("%08x  ", i)

		// القيم hex
		for j := 0; j < 16; j++ {
			if i+j < len(data) {
				fmt.Printf("%02x ", data[i+j])
			} else {
				fmt.Printf("   ")
			}
			if j == 7 {
				fmt.Printf(" ")
			}
		}

		// الحروف القابلة للطباعة
		fmt.Printf(" |")
		for j := 0; j < 16; j++ {
			if i+j < len(data) {
				b := data[i+j]
				if b >= 32 && b <= 126 {
					fmt.Printf("%c", b)
				} else {
					fmt.Printf(".")
				}
			}
		}
		fmt.Printf("|\n")
	}
}
