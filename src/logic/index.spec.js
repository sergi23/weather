
import logic from '.'

describe('Testing-logic', () => {
    describe('Forecast-Geolocation', () => {
        it('Should throw type error when latitude is not a number', () => {
            const latitude = '23.32323'
            expect(() => logic.forecastGeolocation(latitude)).toThrowError(new TypeError('latitude geolocation is not a number'))
        }) 
        it('Should throw type error when latitude is not a number', () => {
            const latitude = []
            expect(() => logic.forecastGeolocation(latitude)).toThrowError(new TypeError('latitude geolocation is not a number'))
        })
        it('Should throw type error when longitude is not a number', () => {
            const latitude = 23.4567
            const longitude = '32.4545'
            expect(() => logic.forecastGeolocation(latitude, longitude)).toThrowError(new TypeError('longitude geolocation is not a number'))
        }) 
        it('Should throw type error when longitude is not a number', () => {
            const latitude = 23.4567
            const longitude = []
            expect(() => logic.forecastGeolocation(latitude, longitude)).toThrowError(new TypeError('longitude geolocation is not a number'))
        }) 
    })
    describe('Forecast-Today', () => {
        it('Should throw type error when query is not a string', () => {
            const query = []
            expect(() => logic.forecastToday(query)).toThrowError(new Error('query today is not a string'))
        }) 
        it('Should throw error when query is empty', () => {
            const query = ''
            expect(() => logic.forecastToday(query)).toThrowError(new Error('query today is empty'))
        }) 
    })
    describe('Forecast-Tomorrow', () => {
        it('Should throw type error when query is not a string', () => {
            const query = []
            expect(() => logic.forecastTomorrow(query)).toThrowError(new Error('query tomorrow is not a string'))
        }) 
        it('Should throw error when query is empty', () => {
            const query = ''
            expect(() => logic.forecastTomorrow(query)).toThrowError(new Error('query tomorrow is empty'))
        }) 
    })
    describe('Forecast-Seven-days', () => {
        it('Should throw type error when query is not a string', () => {
            const query = []
            expect(() => logic.forecastSevenDays(query)).toThrowError(new Error('query seven-days is not a string'))
        }) 
        it('Should throw error when query is empty', () => {
            const query = ''
            expect(() => logic.forecastSevenDays(query).toThrowError(new Error('query seven-days is empty')))
        }) 
    })
    describe('Forecast-Seven-days', () => {
        it('Should throw type error when query is not a string', () => {
            const query = []
            expect(() => logic.forecastSevenDays(query)).toThrowError(new Error('query seven-days is not a string'))
        }) 
        it('Should throw error when query is empty', () => {
            const query = ''
            expect(() => logic.forecastSevenDays(query)).toThrowError(new Error('query seven-days is empty'))
        }) 
    })
}) 