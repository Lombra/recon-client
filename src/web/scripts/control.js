import { ControlStyle, Stylable, StyleElement } from '/scripts/styles.js'

export default class Control extends ControlStyle(Stylable(StyleElement)) {
	labels = []

	constructor() {
		super()
		this.container = document.createElement('div')
		this.container.classList.add('container')
	}

	connectedCallback() {
		this.classList.add('cell')
		this.appendChild(this.container)
	}

	setBaseStyle(style) {
		this.baseStyle = style
	}

	setActiveStyle(style) {
		this.activeStyle = style
	}
	
	addClass(className) {
		this.classList.add(className)
	}
	
	removeClass(className) {
		this.classList.remove(className)
	}
	
	set row(row) {
		this.setStyleProperty('row', row)
	}
	
	set column(column) {
		this.setStyleProperty('column', column)
	}

	createLabel(labelType, parent) {
		let label = document.createElement(labelType + '-label')
		if (parent === 'container') {
			this.appendChild(label)
		} else {
			this.control.appendChild(label)
		}
		this.labels.push(label)
		return label
	}
}
