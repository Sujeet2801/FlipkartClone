

function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === '[object Date]'
}

function isObj(val) {
    return typeof val === 'object'
}

function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
        return JSON.stringify(val)
    } else {
        return val
    }
}

function buildForm({ action, params }) {
    const form = document.createElement('form')
    form.setAttribute('method', 'post')
    form.setAttribute('action', action)

    Object.keys(params)
    

    return form
}

export function post(details) {
    const form = buildForm(details)
    document.body.appendChild(form)
    form.submit()
    form.remove()
}