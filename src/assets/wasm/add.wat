(import "console" "log" (func $log (param i32)))
(func $main (export "main")
    i32.const 1
    i32.const 2
    i32.add
    call $log
)
(start $main)
