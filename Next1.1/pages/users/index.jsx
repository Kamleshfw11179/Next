import styles from "../../styles.module.css"
export default function Users({data}){
    return(
        <div>
           {data.data.map((e)=>{
               return(
                   <div key={e.id} className={styles.user}>
                       <img src={e.avatar}></img>
                       <h3>{e.first_name} {e.last_name}</h3>
                       <h4>{e.email}</h4>
                   </div>
               )
           })}
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch("https://reqres.in/api/users?page=1")
    const data = await res.json();
    
    if(!data){
        return{
            notFound:true
        }
    }else{
        return{
        props:{data}
        }
    }
}

