## Entry point

The program runs from a label `_start`, which need to be set global

```asm
global _start
start:
```

## Return

To return, you need a exit `syscall` (code 60)  
`Exit code` parameter goes into `rdi`

```asm
add rdi 0
mov eax, 60
syscall
```
