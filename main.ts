let full = 0
I2C_LCD1602.LcdInit(39)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P3, 1)
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P6, 1)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        I2C_LCD1602.ShowString("Available slots:", 0, 0)
        I2C_LCD1602.ShowString("Slot 1: 0", 0, 1)
    } else {
        I2C_LCD1602.ShowString("Available slots:", 0, 0)
        I2C_LCD1602.ShowString("Slot 1: 1", 0, 1)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        I2C_LCD1602.ShowString("Available slots:", 0, 0)
        if (pins.digitalReadPin(DigitalPin.P2) == 0) {
            if (pins.digitalReadPin(DigitalPin.P3) == 0) {
                I2C_LCD1602.ShowString("Slot 2: 0 Slot 3: 0 Slot 4: 0", 10, 2)
            } else {
                I2C_LCD1602.ShowString("Slot 2: 0 Slot 3: 0 Slot 4: 1", 10, 2)
            }
        } else {
            if (pins.digitalReadPin(DigitalPin.P3) == 0) {
                I2C_LCD1602.ShowString("Slot 2: 0 Slot 3: 1 Slot 4: 0", 10, 2)
            } else {
                I2C_LCD1602.ShowString("Slot 2: 0 Slot 3: 1 Slot 4: 1", 10, 2)
            }
        }
    } else {
        I2C_LCD1602.ShowString("Available slots:", 0, 0)
        if (pins.digitalReadPin(DigitalPin.P2) == 0) {
            if (pins.digitalReadPin(DigitalPin.P3) == 0) {
                I2C_LCD1602.ShowString("Slot 2: 1 Slot 3: 0 Slot 4: 0", 10, 2)
            } else {
                I2C_LCD1602.ShowString("Slot 2: 1 Slot 3: 0 Slot 4: 1", 10, 2)
            }
        } else {
            if (pins.digitalReadPin(DigitalPin.P3) == 0) {
                I2C_LCD1602.ShowString("Slot 2: 1 Slot 3: 1 Slot 4: 0", 10, 2)
            } else {
                I2C_LCD1602.ShowString("Slot 2: 1 Slot 3: 1 Slot 4: 1", 10, 2)
            }
        }
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P6) == 0 && full == 0) {
        pins.servoWritePin(AnalogPin.P9, 90)
        basic.pause(3000)
    } else {
        pins.servoWritePin(AnalogPin.P9, 0)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0 && pins.digitalReadPin(DigitalPin.P3) == 0) {
        full = 1
    } else {
        full = 0
    }
})
