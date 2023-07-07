export default async function getWorks(type){
    try {
        if( type == null || type == "all" ){
            const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/works?populate=*`)
        const json = await res.json();
        if (!res.ok) {
            throw new Error('Failed to fetch data')
          }
        //   console.log(json.data)
        return json.data
        }
        if(type != "todos"){
            // console.log("dioferente de todos")

            const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/works?filters[type][$eq]=${type}&populate=*`) 
                    
            const json = await res.json();
            if (!res.ok) {
                throw new Error('Failed to fetch data')
              }
            //   console.log(json.data)
            return  json.data
           }




    } catch (reason) {
        return null;
    }

}

