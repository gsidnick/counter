/**
 * Counter
 * @copyright 2022 Nick Sidorenko <gsidnick@gmail.com>
 * @license MIT
 */

/**
 * @class Counter
 */
class Counter {
  /**
   * Creates a new counter
   * @param {Element} [container]
   * @param {object} [options]
   * @return {Counter}
   */
  constructor(container, options = {}) {
    const defaults = {
      min: 1,
      max: 10,
      start: undefined,
      minusClass: 'counter__button-minus',
      plusClass: 'counter__button-plus',
      inputClass: 'counter__input',
    }

    this.container = container
    this.options = this.extend(defaults, options)

    this.initializeValue()
    this.initializeElements()
    this.initializeEvents()
  }

  /**
   * Initialize value
   * @private
   * @return {void}
   */
  initializeValue() {
    if (this.options.start !== undefined &&
        this.options.start >= this.options.min &&
        this.options.start <= this.options.max) {
        this.value = this.options.start
    } else {
      this.value = this.options.min
    }
  }

  /**
   * Initialize DOM elements
   * @private
   * @return {void}
   */
  initializeElements() {
    this.input = document.createElement('input')
    this.input.classList.add('counter__value')
    this.input.type = 'text'

    this.minus = document.createElement('button')
    this.plus = document.createElement('button')

    const minus = this.options.minusClass.split(' ')
    const plus = this.options.plusClass.split(' ')
    const input = this.options.inputClass.split(' ')

    this.minus.classList.add(...minus)
    this.input.classList.add(...input)
    this.plus.classList.add(...plus)

    this.container.append(this.minus)
    this.container.append(this.input)
    this.container.append(this.plus)

    this.render()
  }

  /**
   * Initialize events
   * @private
   * @return {void}
   */
  initializeEvents() {
    this.plus.addEventListener('click', this.increment.bind(this))
    this.minus.addEventListener('click', this.decrement.bind(this))
    this.input.addEventListener('focusin', this.focusInEventHandler.bind(this))
    this.input.addEventListener('focusout', this.focusOutEventHandler.bind(this))
  }

  /**
   * Event Handler (focusin)
   * @private
   * @param {event} [event]
   * @return {void}
   */
  focusInEventHandler(event) {
    event.target.select()
  }

  /**
   * Event Handler (focusout)
   * @private
   * @param {event} [event]
   * @return {void}
   */
  focusOutEventHandler(event) {
    const value = event.target.value

    if (!this.isEmpty(value) && this.isNumber(value) && this.isRange(value)) {
      event.target.value = this.value = Number(event.target.value)
    } else {
      event.target.value = this.value
    }
  }

  /**
   * Increment counter
   * @private
   * @return {void}
   */
  increment() {
    if (this.isRange(this.value + 1)) {
      this.value += 1
      this.render()
    }
  }

  /**
   * Decrement counter
   * @private
   * @return {void}
   */
  decrement() {
    if (this.isRange(this.value - 1)) {
      this.value -= 1
      this.render()
    }
  }

  /**
   * Validate number type
   * @private
   * @param {all} [value]
   * @return {boolean}
   */
  isNumber(value) {
    return !isNaN(Number(value))
  }

  /**
   * Validate empty value
   * @private
   * @param {string} [value]
   * @return {boolean}
   */
  isEmpty(value) {
    return value.trim() === ''
  }

  /**
   * Validate out of range
   * @private
   * @param {number} [value]
   * @return {boolean}
   */
  isRange(value) {
    return value >= this.options.min && value <= this.options.max
  }

  /**
   * Extend options
   * @private
   * @param {object} [defaults]
   * @param {object} [options]
   * @return {object}
   */
  extend(defaults, options = {}) {
    if (options && typeof options === 'object') {
      return Object.assign(defaults, options)
    } else {
      return defaults
    }
  }

  /**
   * Rendering value in DOM element
   * @private
   * @return {void}
   */
  render() {
    this.input.value = this.value
  }
}