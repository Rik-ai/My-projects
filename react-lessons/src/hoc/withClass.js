import React from 'react'


const withClass = (Component, className) => {
    return props => {
        return (
            <section className="Car">
                <Component {...props} />
            </section>
        )
    }
}

export default withClass