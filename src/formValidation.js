import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'


    extend('required', {
        ...required,
        message:'Este campo no puede quedar vacío',
    })

    extend('email', {
        ...email,
         message:'El email debe ser válido',
    })
 
    extend('minmax',{
        validate(value, { min}) {
            return value.length >= min;
        },
        params: ['min', 'name', 'char' ,'pron'],
        message: '{pron} {name} debe tener {min} {char} como mínimo',
    })

    extend('customer', {
        validate(customer) {
            var max= customer < 4306000 && customer > 4300000
            return max;
        },
        message:'Número de cliente no válido',
    })

    extend('espacios', {
        validate(value) {
            let espacios= /\s/;
            return !espacios.test(value);
        },
        message:'No debe haber espacios',
    })

    extend('vat', {
        validate(vat) {
            var regex =/^([A-Z]{1,3})?[0-9]{8,10}([A-Z]{1})?$/
            return regex.test(vat)
        },
        message:'El CIF/DNI debe ser válido',
    })

    extend('numeric', {
        validate(value) {
            return value.isInteger(value);
        },
        message:'Este campo no sólo debe contener números',
    })

  