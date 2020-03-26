import React, { Component } from 'react'
import classes from './Auth.module.css'
import Button from '../../Components/Ui/Button/Button'
import Input from '../../Components/Ui/Input/Input'


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



export default class Auth extends Component {

    // Валидация
    state = {
        isFormVAlid: false,
        formControls: {
            email: {
                valu: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введи нормальный email ска',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                valu: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введи нормальный пароль ска',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }


    loginHandler = () => {


    }

    registerHandler = () => {


    }

    submitHandler = e => {
        e.preventDefault()
    }

    validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (validation.email) {
            isValid = validateEmail(value) && isValid
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (e, controlName) => {

        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = e.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormVAlid = true

        Object.keys(formControls).forEach(name => {
            isFormVAlid = formControls[name].valid && isFormVAlid
        })

        this.setState({
            formControls, isFormVAlid
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={e => this.onChangeHandler(e, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>

                        {this.renderInputs()}

                        <Button

                            type='succes'
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormVAlid}
                        >
                            Войти
                        </Button>
                        <Button
                            type='primary'
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormVAlid}

                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </div>

            </div>
        )
    }
}