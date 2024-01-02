(module
  (type (;0;) (func (param i32)))
  (type (;1;) (func (param i32 i32 i32 i32) (result i32 i32)))
  (type (;2;) (func (param i32 i32)))
  (type (;3;) (func))
  (import "console" "log" (func (;0;) (type 0)))
  (func (;1;) (type 1) (param i32 i32 i32 i32) (result i32 i32)
    local.get 0
    local.get 2
    i32.add
    local.get 1
    local.get 3
    i32.add)
  (func (;2;) (type 2) (param i32 i32)
    local.get 0
    call 0
    local.get 1
    call 0)
  (func (;3;) (type 3)
    i32.const 10
    i32.const 3
    i32.const 10
    i32.const 3
    call 1
    call 2)
  (start 3))
