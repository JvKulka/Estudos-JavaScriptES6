export default class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate
    }

    //Selecionado a data atual
    get _actualDate() {
        return new Date()
    }

    //Selecionado a data para o Natal
    get _futureDate() {
        return new Date(this.futureDate)
    }

    //Realizado a diferença entre a data atual para a data futura
    get _timesTampDiff() {
        return (this._futureDate.getTime() - this._actualDate.getTime())
    }

    //Pego os dias que faltam para a data futura(natal)
    get days() {
        return Math.floor(this._timesTampDiff / (24 * 60 * 60 * 1000))
    }
    //Pego as horas que faltam para a data futura(natal)
    get hours() {
        return Math.floor(this._timesTampDiff / (60 * 60 * 1000))
    }
    //Pego os minutos que faltam para a data futura(natal)
    get minutes() {
        return Math.floor(this._timesTampDiff / (60 * 1000))
    }
    //Pego os segundos que faltam para a data futura(natal)
    get seconds() {
        return Math.floor(this._timesTampDiff / 1000)
    }
    //Realizado a soma total dos dias, horas, minutos e segundos para a data futura(natal)
    get total() {
        const days = this.days
        //Ao usar o modulo (%) ele pega oq restande do que falta para conseguir a hora exata 
        const hours = this.hours % 24
        const minutes = this.minutes % 60
        const seconds = this.seconds % 60
        return {
            days,
            hours,
            minutes,
            seconds,
        }
    }
}
