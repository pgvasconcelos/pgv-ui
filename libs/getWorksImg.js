
export default async function getWorksImg(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/upload/files/`, {
        cache: 'no-cache'
    })
    const json = await res.json();
    if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
    //    console.log(json)
    return json.data
}
