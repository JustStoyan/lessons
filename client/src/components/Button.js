const Button = props => {

    return <button className={props.className} type={props.type} {...props} >

        {props.name}

    </button >
}

export default Button;