I2C_LCD1602.LcdInit(39)
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
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        I2C_LCD1602.ShowString("Available slots:", 0, 0)
        I2C_LCD1602.ShowString("Slot 1: 0", 0, 1)
    } else {
        I2C_LCD1602.ShowString("Available slots:", 0, 0)
        I2C_LCD1602.ShowString("Slot 1: 1", 0, 1)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        I2C_LCD1602.ShowString("Available slots:", 0, 0)
        I2C_LCD1602.ShowString("Slot 2: 0", 10, 1)
    } else {
        I2C_LCD1602.ShowString("Available slots:", 0, 0)
        I2C_LCD1602.ShowString("Slot 2: 1", 10, 1)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        I2C_LCD1602.ShowString("Available slots:", 0, 0)
        I2C_LCD1602.ShowString("Slot 3: 0", 0, 2)
    } else {
        I2C_LCD1602.ShowString("Available slots:", 0, 0)
        I2C_LCD1602.ShowString("Slot 3: 1", 0, 2)
    }
})
