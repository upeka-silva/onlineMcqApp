import axios from 'axios';




export const axiosInstace= axios.create({   
    baseURL:"http://localhost:8080/api/v1/quizzes"

})

export const createQuestion=async (data)=>{
 try {
    const result =await axiosInstace.post("/create",data);
    return result.data;
 } catch (error) {

    console.error(error); 
 }

}


export const fetchAllQuestions=async()=>{
 
 try {
    const reultsData= await axiosInstace.get("/all")
    return reultsData.data
 } catch (error) {
    console.error(error);
 }

}


export const fetchQuestionById=async(id)=>{
    try {
         const resultdataByid=await axiosInstace.get(`/${id}`)
         return resultdataByid.data
    } catch (error) {
        console.error(error);
        return [];      
    }
}

export const fetchQuizForUser=async (number,subject)=>{

    try {
        const results=axiosInstace.get(`/quiz/fetch-questions-for-user?numOfQuestions=${number}subjects=${subject}`)
        
    } catch (error) {
        
    }
}


export const getAllSubjects=async()=>{

    try {
        const result =await axiosInstace.get("/subjects")
        return result.data
    } catch (error) {
        console.error(error);
    }
}

export const UpdateQuestions=async(id,question)=>{

    try {
        const result=await axiosInstace.get(`/${id}/update`,question)
        return result.data;
    } catch (error) {
         console.error(error);
    }
}

export const DeleteQuestions=async(id)=>{

    try {
        const result=await axiosInstace.get(`/${id}`)
        return result.data;
    } catch (error) {
         console.error(error);
    }
}