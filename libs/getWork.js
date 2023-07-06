export default async function getWorks(id){
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL_API}/works/${id}?populate=*`, {
        cache: 'no-cache'
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
    const json = await res.json();
    // console.log(json.data)
    return json.data.attributes
}

