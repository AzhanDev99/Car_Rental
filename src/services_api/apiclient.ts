export const apiClient = async<T>(url:string): Promise<T> =>{
    try {
        const res = await fetch(url);
        if(!res.ok){
            throw new Error(`API Error :${res.status}`)
        }

        const data : T = await res.json();
        return data;
    } catch (error) {
        console.log("Api Client Error:" ,error);
        throw error
    }
}