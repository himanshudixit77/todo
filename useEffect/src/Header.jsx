

 export function Header() {
    return (
        <div>
        <Name prop="himanshu" />
            <Name prop="dixit" />
            <SurName surname={{ name: "mishra", age: 25 }}></SurName>
       
        </div>
  )
}

function Name({ prop }) {
    return <div>{prop}</div>;
}
function SurName({ surname } ) {
    return (
        <>
            {surname.name}<br>
            </br>
            {surname.age}
        </>
    )
    
    
}


export default Header