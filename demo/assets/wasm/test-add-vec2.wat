(module
  (import "console" "log" (func $log (param i32)))
  (func $addvec2 (param $x1 i32) (param $y1 i32) (param $x2 i32) (param $y2 i32) (result i32 i32)
    local.get $x1
    local.get $x2
    i32.add
    local.get $y1
    local.get $y2
    i32.add
  )
  (func $logvec2 (param $x i32) (param $y i32)
    local.get $x
    call $log
    local.get $y
    call $log
  )
  (func $main
    i32.const 10
    i32.const 3

    i32.const 10
    i32.const 3

    call $addvec2

    call $logvec2
  )
  (start $main)
)