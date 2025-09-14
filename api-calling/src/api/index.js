export const GetPosts = async() =>{

   const responce= await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: "GET",
    });
    return await responce.json();

};


export const RandomUser = async()=>{

   const responce= await fetch('https://randomuser.me/api/' ,{
        method: "Get",
    });
       return await responce.json();
};