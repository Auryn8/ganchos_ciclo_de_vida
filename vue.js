//***GANCHOS DEL CICLO DE VIDA DE UNA INSTANCIA**//

//Creando una instancia//
var app = new Vue ({ 
    el:'#vm',
    data: {
        mensaje:'Este es el mensaje'
    },
//método que indica que se va a crear unmétodo que indicaa instancia//    
    beforeCreate: function (){
        console.log("Llamando beforeCreate")
    },
//método que indica que la instancia ya ha sido creada//    
    created: function (){
        console.log("Llamando created")
    },
//método que indica que una instancia se va a montar al DOM//   
    beforeMount: function (){
        console.log("Llamando beforeMount")
    },
//método que indica que la instancia ha sido montada en el DOM//    
    mounted: function (){
        console.log("Llamando mounted")
    },
//método que se ejecuta antes de actualizar, ocurre cuando se va a realizar un cambio en la instancia//    
    beforeUpdate: function (){
        console.log("Llamando beforeUpdate")
    },
//método que indica que la instancia ha sido actualizada, cuando el cambio se realiza//    
    updated: function (){
        console.log("Llamando updated")
    },
//método que indica que la instancia se va a destruir//    
    beforeDestroy: function (){
        console.log("Llamando beforeDestroy")
    },
//método que indica que la instancia destruida, una vez ejectada ya no podemos seguir usando nuestro código//    
    destroyed: function (){
        console.log("Llamando destroyed")
    },
//método para destruir instancia, el símbolo $ se ocupa cuando vamos a usar un método no creado por nosotras//    
    methods: {
        destruir: function (){
            this.$destroy();
        }
    }
})
    
    
        
    