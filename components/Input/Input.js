export const Input = ({type, ...rest}) => {
    if (type=='textarea') {
        return (
            <textarea {...rest} className="block rounded border-slate-400 border-2 p-1 hover:border-slate-500" />
        )
    } else {
        return (
            <input {...rest} className="block rounded border-slate-400 border-2 p-1 hover:border-slate-500" />
        )
    }
    
}