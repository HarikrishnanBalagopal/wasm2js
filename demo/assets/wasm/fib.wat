(module
  (import "console" "log" (func $log (param i32)))
  (type (func (param i32) (result i32)))
  (func $fib (export "fib") (type 0)
    (local $a i32)
    (local $b i32)
    (local $i i32)

    local.get 0
    local.set $i

    i32.const 0
    local.set $a

    i32.const 1
    local.set $b

    loop $myloop
      local.get $a
      local.get $b
      i32.add

      local.get $b
      local.set $a

      local.set $b

      local.get $i
      i32.const 1
      i32.sub
      local.tee $i

      i32.const 0
      i32.gt_s
      br_if $myloop
    end

    local.get $b
  )
  (func $main
    (local $i i32)
    i32.const 0
    local.set $i

    loop $loop
      local.get $i
      call $fib
      call $log

      local.get $i
      i32.const 1
      i32.add
      local.tee $i
      i32.const 10
      i32.lt_s
      br_if $loop
    end
  )
  (start $main)
)