export default function Section({
    title, 
    text,
    fonTitle
    
}) {

    return (<>
        <div className="border-blue-300 border-2 h-auto w-full ">
            <div className="border-4 border-b-emerald-400 p-2">
                <h2 className={`${fonTitle}`}>{title}</h2>
                <br />
                <div className="flex ">
                    <p>Al
                        <span className="text-amber-600">  comenzar </span>
                        {text}
                    </p>
                </div>
                <img src="" alt="" />
            </div>
        </div>
    </>)
}

