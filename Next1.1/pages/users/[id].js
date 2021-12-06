import style from "../../styles.module.css"
export default function User({data}){
    console.log(data)
    return(
        <div style={{margin:"auto"}} className={style.user}>
         <img src={data.avatar}></img>
            <h1>{data.first_name} {data.last_name}</h1>
            <h3>{data.email}</h3>
        </div>
    )
}

export async function getStaticPaths(){
    const res = await fetch("https://reqres.in/api/users?page=1")
    const data = await res.json();
    const paths = data.data.map((e)=>({
        params:{id:e.id.toString()}
    }))
    return {paths,fallback:false}
}

export async function getStaticProps({params}){
    let res = await fetch(`https://reqres.in/api/users/${params.id}`);
    let data = await res.json();
    console.log(data)
    if(!data){
        return{
            notFound:true
        }
    }else{
        return{
            props:data
        }
    }
}