import pic from "../profile.jpg"


export const Show = ({data}) =>{

return(
<div className="App">
    <div style={{width:"40%", margin:"0 auto", boxShadow: "3px 5px 5px rgba(0, 0, 0, 0.6)"}} >
        <img src={pic} style={{width:220, paddingBottom:12}}/>
        <h2> {data.person.fullName}</h2>
        <h4> {data.person.profession}</h4>
        <h6 style={{paddingBottom:12}}> {data.person.bio}</h6>
    </div>
</div> 
)

}