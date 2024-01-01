;; FIRE_WIDTH = 320
;; FIRE_HEIGHT = 168
;; FIRE_WIDTH * FIRE_HEIGHT = 53760
;; FIRE_WIDTH * (FIRE_HEIGHT - 1) = 53440

(import "" "rand" (func $random (result f64)))

;; 5 pages * 64KiB bytes per page:
;; [0, 53760)       => firePixels, 1 byte per pixel.
;; [53760, 268800)  => canvasData, 4 bytes per pixel.
;; [268800, 268948) => Palette data, RGBA.
(memory (export "mem") 5)

(func (export "run")
  (local $i i32)
  (local $x i32)
  (local $y i32)
  (local $pixel i32)
  (local $randIdx i32)

  ;; Update the fire.
  (loop $xloop
    i32.const 0
    local.set $y

    (loop $yloop
      local.get $y
      i32.const 320 ;; width
      i32.mul
      local.get $x
      i32.add
      i32.const 4 ;; 4 bytes per pixel
      i32.mul ;; address

      i32.const 0
      if
        i32.const 22
        drop
      end

      call $random
      f64.const 0.5
      f64.lt
      if (result i32)
        i32.const 0xFFFF00FF ;; ABGR purple value
      else
        i32.const 0xFF00FFFF ;; ABGR yellow value
      end

      i32.store offset=53760

      local.get $y
      i32.const 1
      i32.add
      local.set $y

      (br_if $yloop
        (i32.lt_u (local.get $y) (i32.const 168)))
    )

    local.get $x
    i32.const 1
    i32.add
    local.set $x

    (br_if $xloop
      (i32.lt_u (local.get $x) (i32.const 320)))
  )
)
