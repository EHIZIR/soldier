const soldier = {
    soldierName: 'Mayk',
    health: 10,
    weapon: {
        model: 'M16',
        cartridges: 30,
    },
    supplies: 3,
    fire: function () {
        
        if (this.weapon.cartridges === 0) {
            console.log('Обайма пуста. Перезарядись')
        }else{
            this.weapon.cartridges--
            console.log('бах-бах')
        }
    },
    recharge: function () {
        
        if (this.supplies === 0) {
            console.log('не осталось препасов')
        } else {
            this.weapon.cartridges = 30,
        this.supplies--
        console.log('перезарядка...')
        }
    },
    hurt: function () {
        
        if (this.health === 0) {
            console.log('ты проиграл')
        } else {
            this.health--
        }
    }
}
