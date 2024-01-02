(module
  (type (;0;) (func (param i32 i32)))
  (type (;1;) (func (param i32) (result i32)))
  (type (;2;) (func (param i32 i32) (result i32)))
  (type (;3;) (func))
  (type (;4;) (func (param i32)))
  (import "" "rate" (global (;0;) i32))
  (import "" "init" (func (;0;) (type 0)))
  (import "" "draw" (func (;1;) (type 0)))
  (import "" "mem" (memory (;0;) 1))
  (func (;2;) (type 1) (param i32) (result i32)
    local.get 0
    i32.load8_u
    i32.const 8
    i32.shl
    local.get 0
    i32.load8_u offset=1
    i32.or
    i32.const 1
    i32.shl)
  (func (;3;) (type 2) (param i32 i32) (result i32)
    i32.const 0
    local.get 1
    local.get 0
    local.get 0
    local.get 1
    i32.gt_s
    select
    local.get 0
    i32.const 0
    i32.lt_s
    select)
  (func (;4;) (type 3)
    (local i32 i32 i32 i32 i32 i32 i32 i32 i32)
    i32.const 66488
    local.set 2
    loop  ;; label = @1
      i32.const 1
      local.get 2
      i32.load8_u
      local.tee 4
      i32.add
      global.get 3
      local.get 4
      global.get 3
      i32.ge_u
      select
      global.set 3
      local.get 2
      i32.const 1
      i32.add
      local.tee 2
      i32.const 66616
      i32.lt_u
      br_if 0 (;@1;)
    end
    i32.const 66486
    i32.load8_u
    i32.const 127
    i32.and
    global.set 1
    local.get 2
    i32.load8_u offset=3
    i32.load8_u offset=26
    local.get 2
    i32.load8_u offset=2
    i32.load8_u offset=26
    i32.add
    local.get 2
    i32.load8_u offset=1
    i32.const 5
    i32.add
    i32.load8_u offset=26
    i32.add
    local.get 2
    i32.load8_u
    i32.const 2
    i32.add
    i32.load8_u offset=26
    i32.add
    local.tee 0
    i32.load8_u
    local.get 0
    i32.const 59
    i32.lt_u
    i32.mul
    global.set 2
    global.get 2
    global.get 3
    call 0
    i32.const 66620
    global.get 3
    global.get 2
    i32.mul
    i32.const 8
    i32.shl
    i32.add
    local.set 5
    i32.const 65566
    local.set 2
    i32.const 195
    local.set 3
    loop  ;; label = @1
      local.get 2
      i32.const 12
      i32.add
      call 2
      local.set 6
      local.get 2
      i32.const 16
      i32.add
      call 2
      local.set 7
      local.get 2
      i32.const 18
      i32.add
      call 2
      local.set 8
      local.get 7
      local.get 8
      i32.add
      local.get 6
      i32.gt_u
      if  ;; label = @2
        local.get 7
        i32.const 1
        i32.shr_u
        local.get 8
        i32.add
        local.get 6
        i32.le_u
        if  ;; label = @3
          local.get 7
          i32.const 1
          i32.shr_u
          local.set 7
        else
          local.get 6
          local.get 7
          i32.sub
          local.set 8
        end
      end
      local.get 8
      i32.const 4
      i32.lt_u
      if  ;; label = @2
        local.get 6
        local.set 7
        i32.const 0
        local.set 8
      end
      local.get 3
      local.get 5
      i32.store
      local.get 3
      local.get 7
      f32.convert_i32_u
      f32.store offset=4
      local.get 3
      local.get 8
      f32.convert_i32_u
      f32.store offset=8
      local.get 3
      local.get 2
      i32.load8_u offset=14
      i32.const 15
      i32.and
      i32.store8 offset=12
      local.get 3
      local.get 2
      i32.load8_u offset=15
      i32.const 127
      i32.and
      i32.const 64
      call 3
      i32.store8 offset=13
      local.get 5
      local.get 6
      i32.add
      local.set 5
      local.get 3
      i32.const 14
      i32.add
      local.set 3
      local.get 2
      i32.const 30
      i32.add
      local.tee 2
      i32.const 66466
      i32.lt_u
      br_if 0 (;@1;)
    end
    global.get 2
    i32.const 4
    i32.gt_u
    if  ;; label = @1
      global.get 4
      i32.const 2
      f32.convert_i32_u
      f32.mul
      global.set 4
      i32.const 3579364
      global.set 5
    else
      i32.const 3546836
      global.set 5
    end
    global.get 0
    i32.const 50
    i32.div_u
    global.set 6
    loop  ;; label = @1
      i32.const 629
      local.get 1
      i32.const 52
      i32.mul
      i32.add
      local.tee 0
      local.get 1
      i32.store8 offset=36
      local.get 0
      i32.const 127
      local.get 1
      i32.const 1
      i32.add
      local.tee 1
      i32.const 3
      i32.and
      i32.const 2
      i32.ge_u
      i32.mul
      i32.store8 offset=35
      local.get 1
      global.get 2
      i32.lt_u
      br_if 0 (;@1;)
    end
    call 5)
  (func (;5;) (type 3)
    (local i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32)
    i32.const 629
    local.set 3
    local.get 3
    global.get 2
    i32.const 52
    i32.mul
    i32.add
    local.set 0
    global.get 12
    i32.const 1
    i32.sub
    global.set 12
    global.get 12
    i32.const 0
    i32.le_s
    local.tee 1
    if  ;; label = @1
      global.get 13
      global.set 12
      global.get 11
      i32.const 0
      i32.lt_s
      if  ;; label = @2
        global.get 8
        i32.const 1
        i32.add
        global.set 9
        i32.const 0
        global.set 11
      end
      global.get 9
      i32.const 0
      i32.ge_s
      if  ;; label = @2
        global.get 9
        global.get 1
        i32.ge_s
        if  ;; label = @3
          i32.const 0
          global.set 9
          i32.const 0
          global.set 11
        end
        global.get 9
        global.set 8
        loop  ;; label = @3
          local.get 3
          i32.const 0
          i32.store8 offset=38
          local.get 3
          i32.const 52
          i32.add
          local.tee 3
          local.get 0
          i32.lt_u
          br_if 0 (;@3;)
        end
        i32.const 629
        local.set 3
        i32.const -1
        global.set 9
      end
      global.get 11
      global.set 10
      global.get 8
      global.get 10
      call 1
      global.get 10
      i32.const 1
      i32.add
      global.set 11
      global.get 11
      i32.const 64
      i32.ge_u
      if  ;; label = @2
        i32.const -1
        global.set 11
      end
      global.get 8
      i32.load8_u offset=66488
      i32.const 6
      i32.shl
      global.get 10
      i32.add
      global.get 2
      i32.mul
      i32.const 4
      i32.mul
      i32.const 66620
      i32.add
      local.set 2
    end
    loop  ;; label = @1
      block  ;; label = @2
        block  ;; label = @3
          block  ;; label = @4
            block  ;; label = @5
              local.get 1
              if  ;; label = @6
                local.get 3
                local.get 2
                i32.load8_u
                local.tee 4
                i32.const 15
                i32.and
                i32.const 8
                i32.shl
                local.get 2
                i32.load8_u offset=1
                i32.or
                i32.store16 offset=28
                local.get 3
                local.get 2
                i32.load8_u offset=2
                local.tee 5
                i32.const 4
                i32.shr_u
                local.get 4
                i32.const 16
                i32.and
                i32.or
                i32.store8 offset=30
                local.get 5
                i32.const 15
                i32.and
                local.set 6
                local.get 2
                i32.load8_u offset=3
                local.set 8
                local.get 8
                i32.const 15
                i32.and
                local.set 9
                local.get 8
                i32.const 4
                i32.shr_u
                local.set 10
                local.get 2
                i32.const 4
                i32.add
                local.set 2
                local.get 6
                i32.const 14
                i32.eq
                if  ;; label = @7
                  i32.const 16
                  local.get 10
                  i32.or
                  local.set 6
                  local.get 9
                  local.set 8
                  i32.const 0
                  local.set 10
                end
                local.get 6
                i32.eqz
                local.get 8
                i32.eqz
                i32.eqz
                i32.and
                if  ;; label = @7
                  i32.const 14
                  local.set 6
                end
                i32.const 0
                local.get 8
                i32.sub
                local.set 11
                local.get 3
                local.get 6
                i32.store8 offset=31
                local.get 3
                local.get 8
                i32.store8 offset=32
                local.get 3
                i32.const 0
                i32.store offset=39
                local.get 6
                i32.const 29
                i32.ne
                local.get 8
                i32.eqz
                i32.or
                if  ;; label = @7
                  local.get 3
                  call 6
                end
                block  ;; label = @7
                  block  ;; label = @8
                    block  ;; label = @9
                      block  ;; label = @10
                        block  ;; label = @11
                          block  ;; label = @12
                            block  ;; label = @13
                              block  ;; label = @14
                                block  ;; label = @15
                                  block  ;; label = @16
                                    block  ;; label = @17
                                      block  ;; label = @18
                                        block  ;; label = @19
                                          block  ;; label = @20
                                            block  ;; label = @21
                                              local.get 6
                                              br_table 19 (;@2;) 19 (;@2;) 19 (;@2;) 14 (;@7;) 17 (;@4;) 19 (;@2;) 17 (;@4;) 17 (;@4;) 13 (;@8;) 19 (;@2;) 19 (;@2;) 12 (;@9;) 11 (;@10;) 10 (;@11;) 19 (;@2;) 9 (;@12;) 19 (;@2;) 8 (;@13;) 7 (;@14;) 19 (;@2;) 6 (;@15;) 19 (;@2;) 5 (;@16;) 4 (;@17;) 19 (;@2;) 19 (;@2;) 3 (;@18;) 2 (;@19;) 1 (;@20;) 19 (;@2;) 0 (;@21;) 19 (;@2;)
                                            end
                                            global.get 13
                                            global.get 13
                                            local.get 8
                                            i32.mul
                                            i32.add
                                            global.set 12
                                            br 18 (;@2;)
                                          end
                                          local.get 8
                                          br_if 17 (;@2;)
                                          local.get 3
                                          i32.const 0
                                          i32.store8 offset=34
                                          br 17 (;@2;)
                                        end
                                        local.get 11
                                        local.set 8
                                      end
                                      local.get 3
                                      local.get 3
                                      i32.load8_u offset=34
                                      local.get 8
                                      i32.add
                                      i32.const 64
                                      call 3
                                      i32.store8 offset=34
                                      br 15 (;@2;)
                                    end
                                    unreachable
                                  end
                                  local.get 8
                                  i32.eqz
                                  if  ;; label = @16
                                    local.get 3
                                    global.get 10
                                    i32.store8 offset=38
                                  end
                                  local.get 3
                                  i32.load8_u offset=38
                                  global.get 10
                                  i32.ge_s
                                  global.get 9
                                  i32.const 0
                                  i32.ge_s
                                  i32.or
                                  br_if 13 (;@2;)
                                  global.get 14
                                  i32.const 0
                                  i32.lt_s
                                  if  ;; label = @16
                                    local.get 8
                                    global.set 14
                                    local.get 3
                                    i32.load8_u offset=36
                                    global.set 15
                                  end
                                  global.get 15
                                  local.get 3
                                  i32.load8_u offset=36
                                  i32.ne
                                  br_if 13 (;@2;)
                                  global.get 14
                                  i32.eqz
                                  if  ;; label = @16
                                    local.get 3
                                    global.get 10
                                    i32.const 1
                                    i32.add
                                    i32.store8 offset=38
                                  else
                                    local.get 3
                                    i32.load8_u offset=38
                                    global.set 11
                                  end
                                  global.get 14
                                  i32.const 1
                                  i32.sub
                                  global.set 14
                                  br 13 (;@2;)
                                end
                                local.get 8
                                i32.const 8
                                i32.ge_s
                                br_if 12 (;@2;)
                                local.get 3
                                local.get 8
                                i32.store8 offset=43
                                br 12 (;@2;)
                              end
                              local.get 11
                              local.set 8
                            end
                            local.get 3
                            local.get 3
                            i32.load16_u offset=24
                            local.get 8
                            i32.sub
                            i32.const 65535
                            call 3
                            i32.store16 offset=24
                            br 10 (;@2;)
                          end
                          local.get 8
                          i32.eqz
                          br_if 9 (;@2;)
                          local.get 8
                          i32.const 32
                          i32.lt_s
                          if  ;; label = @12
                            local.get 8
                            global.set 12
                            local.get 8
                            global.set 13
                          else
                            global.get 0
                            i32.const 5
                            i32.mul
                            local.get 8
                            i32.const 1
                            i32.shl
                            i32.div_u
                            global.set 6
                          end
                          br 9 (;@2;)
                        end
                        global.get 14
                        i32.const 0
                        i32.ge_s
                        br_if 8 (;@2;)
                        global.get 9
                        i32.const 0
                        i32.lt_s
                        if  ;; label = @11
                          global.get 8
                          i32.const 1
                          i32.add
                          global.set 9
                        end
                        local.get 10
                        i32.const 10
                        i32.mul
                        local.get 9
                        i32.add
                        global.set 11
                        global.get 11
                        i32.const 64
                        i32.lt_s
                        br_if 8 (;@2;)
                        i32.const 0
                        global.set 11
                        br 8 (;@2;)
                      end
                      local.get 3
                      local.get 8
                      i32.const 64
                      call 3
                      i32.store8 offset=34
                      br 7 (;@2;)
                    end
                    global.get 14
                    i32.const 0
                    i32.ge_s
                    br_if 6 (;@2;)
                    local.get 8
                    global.set 9
                    i32.const 0
                    global.set 11
                    br 6 (;@2;)
                  end
                  global.get 2
                  i32.const 4
                  i32.eq
                  br_if 5 (;@2;)
                  local.get 3
                  local.get 8
                  i32.const 127
                  call 3
                  i32.store8 offset=35
                  br 5 (;@2;)
                end
                local.get 8
                i32.eqz
                br_if 4 (;@2;)
                local.get 3
                local.get 8
                i32.store8 offset=37
              else
                local.get 3
                i32.load8_u offset=31
                local.set 6
                local.get 3
                i32.load8_u offset=32
                local.set 8
                local.get 3
                local.get 3
                i32.load8_u offset=39
                i32.const 1
                i32.add
                local.tee 12
                i32.store8 offset=39
                block  ;; label = @7
                  block  ;; label = @8
                    block  ;; label = @9
                      block  ;; label = @10
                        block  ;; label = @11
                          block  ;; label = @12
                            local.get 6
                            br_table 10 (;@2;) 5 (;@7;) 4 (;@8;) 7 (;@5;) 8 (;@4;) 7 (;@5;) 8 (;@4;) 8 (;@4;) 10 (;@2;) 10 (;@2;) 9 (;@3;) 10 (;@2;) 10 (;@2;) 10 (;@2;) 3 (;@9;) 10 (;@2;) 10 (;@2;) 10 (;@2;) 10 (;@2;) 10 (;@2;) 10 (;@2;) 10 (;@2;) 10 (;@2;) 10 (;@2;) 10 (;@2;) 2 (;@10;) 10 (;@2;) 10 (;@2;) 1 (;@11;) 0 (;@12;) 10 (;@2;)
                          end
                          local.get 8
                          local.get 12
                          i32.ne
                          br_if 9 (;@2;)
                          local.get 3
                          call 6
                          br 9 (;@2;)
                        end
                        local.get 8
                        local.get 12
                        i32.ne
                        br_if 8 (;@2;)
                        local.get 3
                        i32.const 0
                        i32.store8 offset=34
                        br 8 (;@2;)
                      end
                      local.get 12
                      local.get 8
                      i32.lt_s
                      br_if 7 (;@2;)
                      local.get 3
                      i32.const 0
                      i32.store8 offset=39
                      local.get 3
                      i32.const 0
                      i32.store offset=12
                      br 7 (;@2;)
                    end
                    block (result i32)  ;; label = @9
                      block  ;; label = @10
                        block  ;; label = @11
                          block  ;; label = @12
                            block  ;; label = @13
                              local.get 12
                              br_table 1 (;@12;) 2 (;@11;) 3 (;@10;) 0 (;@13;)
                            end
                            local.get 3
                            i32.const 0
                            i32.store8 offset=39
                            br 10 (;@2;)
                          end
                          i32.const 0
                          br 2 (;@9;)
                        end
                        local.get 8
                        i32.const 4
                        i32.shr_u
                        br 1 (;@9;)
                      end
                      local.get 8
                      i32.const 15
                      i32.and
                      br 0 (;@9;)
                    end
                    local.get 3
                    i32.store8 offset=42
                    br 6 (;@2;)
                  end
                  local.get 11
                  local.set 8
                end
                local.get 3
                local.get 3
                i32.load16_u offset=24
                local.get 8
                i32.sub
                i32.const 65535
                call 3
                i32.store16 offset=24
              end
              br 3 (;@2;)
            end
            local.get 3
            i32.load16_u offset=24
            local.set 14
            local.get 3
            i32.load16_u offset=26
            local.set 15
            local.get 3
            local.get 14
            local.get 15
            i32.lt_s
            if (result i32)  ;; label = @5
              local.get 15
              local.get 14
              local.get 3
              i32.load8_u offset=37
              i32.add
              local.tee 14
              local.get 14
              local.get 15
              i32.gt_s
              select
            else
              local.get 15
              local.get 14
              local.get 3
              i32.load8_u offset=37
              i32.sub
              local.tee 14
              local.get 14
              local.get 15
              i32.lt_s
              select
            end
            i32.store16 offset=24
            br 1 (;@3;)
          end
          local.get 3
          local.get 6
          i32.const 7
          i32.eq
          local.tee 7
          i32.const 2
          i32.shl
          i32.add
          local.set 16
          local.get 1
          if  ;; label = @4
            local.get 10
            if  ;; label = @5
              local.get 3
              local.get 10
              i32.store8 offset=45
            end
            local.get 9
            if  ;; label = @5
              local.get 3
              local.get 9
              i32.store8 offset=46
            end
          else
            local.get 16
            local.get 16
            i32.load8_u offset=44
            local.get 16
            i32.load8_u offset=45
            i32.add
            i32.store8 offset=44
          end
          local.get 16
          i32.load8_u offset=44
          local.set 18
          block  ;; label = @4
            block  ;; label = @5
              block  ;; label = @6
                block  ;; label = @7
                  block  ;; label = @8
                    local.get 16
                    i32.load8_u offset=43
                    i32.const 3
                    i32.and
                    br_table 3 (;@5;) 2 (;@6;) 1 (;@7;) 0 (;@8;)
                  end
                  global.get 16
                  i32.const 20
                  i32.shr_u
                  i32.const 255
                  i32.sub
                  local.set 17
                  global.get 16
                  i32.const 65
                  i32.mul
                  i32.const 17
                  i32.add
                  i32.const 536870911
                  i32.and
                  global.set 16
                  br 3 (;@4;)
                end
                i32.const 255
                local.get 18
                i32.const 32
                i32.and
                i32.const 4
                i32.shl
                i32.sub
                local.set 17
                br 2 (;@4;)
              end
              i32.const 255
              local.get 18
              i32.const 32
              i32.add
              i32.const 63
              i32.and
              i32.const 3
              i32.shl
              i32.sub
              local.set 17
              br 1 (;@4;)
            end
          end
          local.get 16
          local.get 7
          i32.add
          local.get 17
          local.get 16
          i32.load8_u offset=46
          i32.mul
          i32.const 7
          local.get 7
          i32.sub
          i32.shr_u
          i32.store8 offset=40
        end
        local.get 6
        i32.const 5
        i32.lt_u
        i32.const 7
        local.get 6
        i32.eq
        i32.or
        local.get 1
        i32.or
        br_if 0 (;@2;)
        local.get 3
        local.get 3
        i32.load8_u offset=34
        local.get 8
        i32.const 4
        i32.shr_u
        i32.add
        local.get 8
        i32.const 15
        i32.and
        i32.sub
        i32.const 64
        call 3
        i32.store8 offset=34
      end
      local.get 6
      i32.eqz
      i32.eqz
      local.get 1
      i32.or
      if  ;; label = @2
        i32.const 6848
        local.get 3
        i32.load16_u offset=24
        local.get 3
        i32.load8_u offset=40
        i32.add
        local.get 3
        i32.load8_u offset=42
        i32.const 1
        i32.shl
        i32.load16_u offset=149
        i32.mul
        i32.const 11
        i32.shr_u
        local.tee 13
        i32.const 1
        i32.shr_u
        local.get 13
        i32.const 1
        i32.and
        i32.add
        local.tee 13
        local.get 13
        i32.const 14
        i32.lt_u
        select
        local.set 13
        local.get 3
        global.get 5
        local.get 13
        i32.div_u
        f32.convert_i32_u
        global.get 0
        f32.convert_i32_u
        f32.div
        f32.store offset=16
        local.get 3
        local.get 3
        i32.load8_u offset=34
        local.get 3
        i32.load8_u offset=41
        i32.add
        i32.const 64
        call 3
        f32.convert_i32_u
        global.get 4
        f32.mul
        f32.const 0x1p-5 (;=0.03125;)
        f32.mul
        f32.store offset=20
      end
      local.get 3
      i32.const 52
      i32.add
      local.tee 3
      local.get 0
      i32.lt_u
      br_if 0 (;@1;)
    end)
  (func (;6;) (type 4) (param i32)
    (local i32 i32 i32 i32 i32)
    local.get 0
    i32.load8_u offset=30
    local.tee 1
    i32.const 1
    i32.sub
    i32.const 31
    i32.lt_u
    if  ;; label = @1
      local.get 0
      local.get 1
      i32.const 14
      i32.mul
      i32.const 181
      i32.add
      local.tee 2
      i32.store offset=4
      local.get 0
      i32.const 0
      i32.store offset=8
      local.get 0
      local.get 2
      i32.load16_u offset=12
      i32.store16 offset=33
      local.get 2
      f32.load offset=8
      f32.const 0x0p+0 (;=0;)
      f32.le
      local.get 0
      i32.load
      i32.eqz
      i32.or
      br_if 0 (;@1;)
      local.get 0
      local.get 2
      i32.store
    end
    local.get 0
    i32.load8_u offset=31
    local.tee 3
    i32.const 9
    i32.eq
    if  ;; label = @1
      local.get 0
      local.get 0
      i32.load8_u offset=32
      i32.const 8
      i32.shl
      i32.store offset=8
    end
    local.get 3
    i32.const 21
    i32.eq
    if  ;; label = @1
      local.get 0
      local.get 0
      i32.load8_u offset=32
      i32.store8 offset=33
    end
    local.get 0
    i32.load16_u offset=28
    local.tee 4
    i32.eqz
    br_if 0 (;@0;)
    local.get 0
    local.get 4
    local.get 0
    i32.load8_u offset=33
    i32.const 15
    i32.and
    i32.const 1
    i32.shl
    i32.load16_u offset=117
    i32.mul
    i32.const 11
    i32.shr_u
    local.tee 5
    i32.const 1
    i32.shr_u
    local.get 5
    i32.const 1
    i32.and
    i32.add
    i32.store16 offset=26
    local.get 3
    i32.const 3
    i32.eq
    local.get 3
    i32.const 5
    i32.eq
    i32.or
    br_if 0 (;@0;)
    local.get 0
    local.get 0
    i32.load offset=4
    i32.store
    local.get 0
    local.get 0
    i32.load16_u offset=26
    i32.store16 offset=24
    local.get 0
    local.get 0
    i32.load offset=8
    f32.convert_i32_u
    f32.store offset=12
    local.get 0
    i32.load8_u offset=43
    i32.const 4
    i32.lt_u
    if  ;; label = @1
      local.get 0
      i32.const 0
      i32.store8 offset=44
    end
    local.get 0
    i32.load8_u offset=47
    i32.const 4
    i32.lt_u
    if  ;; label = @1
      local.get 0
      i32.const 0
      i32.store8 offset=48
    end)
  (func (;7;) (type 4) (param i32)
    (local i32 i32 i32 i32 i32 i32 i32 i32 i32 f32 f32 f32 f32 f32 f32 f32 f32 f32)
    i32.const 4096
    i32.const 0
    i32.const 32768
    memory.fill
    loop  ;; label = @1
      global.get 6
      global.get 7
      i32.sub
      local.get 0
      call 3
      local.set 2
      i32.const 0
      local.set 3
      loop  ;; label = @2
        local.get 1
        local.tee 5
        local.get 2
        i32.add
        local.set 7
        i32.const 629
        local.get 3
        i32.const 52
        i32.mul
        i32.add
        local.tee 4
        f32.load offset=12
        local.set 10
        local.get 4
        f32.load offset=16
        local.set 12
        local.get 4
        i32.load
        local.tee 8
        f32.load offset=4
        local.get 8
        f32.load offset=8
        local.tee 17
        f32.add
        local.set 18
        local.get 4
        i32.load8_u offset=35
        f32.convert_i32_u
        f32.const 0x1.fcp+6 (;=127;)
        f32.div
        local.tee 16
        local.get 4
        f32.load offset=20
        local.tee 15
        f32.mul
        local.set 14
        f32.const 0x1p+0 (;=1;)
        local.get 16
        f32.sub
        local.get 15
        f32.mul
        local.set 13
        local.get 8
        i32.load
        local.set 9
        local.get 5
        local.get 7
        i32.lt_u
        local.get 8
        i32.eqz
        i32.eqz
        i32.and
        if  ;; label = @3
          loop  ;; label = @4
            local.get 10
            local.get 18
            f32.ge
            if  ;; label = @5
              local.get 17
              f32.const 0x1p+0 (;=1;)
              f32.le
              if  ;; label = @6
                local.get 18
                local.set 10
                br 3 (;@3;)
              end
              loop  ;; label = @6
                local.get 10
                local.get 17
                f32.sub
                local.tee 10
                local.get 18
                f32.ge
                br_if 0 (;@6;)
              end
            end
            local.get 10
            local.get 7
            local.get 5
            i32.sub
            f32.convert_i32_u
            local.get 12
            f32.mul
            f32.add
            local.get 18
            f32.min
            local.set 11
            loop  ;; label = @5
              local.get 5
              local.get 7
              i32.ge_u
              br_if 2 (;@3;)
              local.get 5
              i32.const 1
              i32.add
              local.tee 5
              i32.const 2
              i32.shl
              local.tee 6
              local.get 6
              f32.load offset=4092
              local.get 14
              local.get 9
              local.get 10
              i32.trunc_f32_u
              i32.add
              i32.load8_s
              f32.convert_i32_s
              f32.const 0x1p+7 (;=128;)
              f32.div
              local.tee 15
              f32.mul
              f32.add
              f32.store offset=4092
              local.get 6
              local.get 6
              f32.load offset=20476
              local.get 13
              local.get 15
              f32.mul
              f32.add
              f32.store offset=20476
              local.get 10
              local.get 12
              f32.add
              local.tee 10
              local.get 11
              f32.lt
              br_if 0 (;@5;)
            end
            local.get 5
            local.get 7
            i32.lt_u
            br_if 0 (;@4;)
          end
        end
        local.get 4
        local.get 10
        f32.store offset=12
        local.get 3
        i32.const 1
        i32.add
        local.tee 3
        global.get 2
        i32.lt_u
        br_if 0 (;@2;)
      end
      global.get 7
      local.get 2
      i32.add
      global.set 7
      global.get 7
      global.get 6
      i32.eq
      if  ;; label = @2
        call 5
        i32.const 0
        global.set 7
      end
      local.get 1
      local.get 2
      i32.add
      local.set 1
      local.get 0
      local.get 2
      i32.sub
      local.tee 0
      i32.const 0
      i32.gt_s
      br_if 0 (;@1;)
    end)
  (global (;1;) (mut i32) (i32.const 0))
  (global (;2;) (mut i32) (i32.const 0))
  (global (;3;) (mut i32) (i32.const 0))
  (global (;4;) (mut f32) (f32.const 0x1p-1 (;=0.5;)))
  (global (;5;) (mut i32) (i32.const 0))
  (global (;6;) (mut i32) (i32.const 6))
  (global (;7;) (mut i32) (i32.const 0))
  (global (;8;) (mut i32) (i32.const 0))
  (global (;9;) (mut i32) (i32.const 0))
  (global (;10;) (mut i32) (i32.const 0))
  (global (;11;) (mut i32) (i32.const 0))
  (global (;12;) (mut i32) (i32.const 1))
  (global (;13;) (mut i32) (i32.const 6))
  (global (;14;) (mut i32) (i32.const -1))
  (global (;15;) (mut i32) (i32.const -1))
  (global (;16;) (mut i32) (i32.const 0))
  (export "run" (func 7))
  (start 4)
  (data (;0;) (i32.const 0) "\02\01\03\14\0a\1e\05\16\0c \04\15\0b\1f\04\08\05\06\17\0d\07\1d\13\04\06\05\09\1a\10\07\08\08\04\06\07\18\0e\04\04\05\08\1c\12\07\08\19\0f\06\09\1b\11\06\04\04\08\04\04\09\08\11;;;;\10;;;;;;;\1d;\13\11;\01\00\02\0a\06\11\22,\1a0(\14;;\01;\01%\10\12;\00\08;\0c;\08\00\0b\0f\07\00\08\07;\08;\07;\07\00\10\e3\0f\c5\0f\a8\0f\8b\0fo\0fR\0f6\0f\f4\10\d4\10\b5\10\97\10x\10Z\10<\10\1e\10\00\10\1a\0fA\0et\0d\b3\0c\fd\0bP\0b\ae\0a\14\0a\83\09\fb\08z\08\00\08\8d\07!\07\ba\06"))
