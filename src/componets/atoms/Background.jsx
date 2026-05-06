export default function Background( {src, variant, className} ){
    return(
        <img className={className} src={src}  alt=""  variant={variant} />
    )
}