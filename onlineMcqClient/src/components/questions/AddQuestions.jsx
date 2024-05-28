import React, { useState } from 'react'

const AddQuestions = () => {

  const[subject,setSubject]=useState("");
  const[subjectOptions,setSubjectOptions]=useState([""])
  const[newSubject,setNewSubject]=useState("")
  const[question,setQuestion]=useState("")
  const[questionType,setQuestionType]=useState("")
  const[choice,setChoice]=useState([""])




  const handleAddSubject=()=>{


  }





  
  return (
      <div className='w-full h-screen    '>
          <div className=' shadow-md text-green-500 py-7'> Navbar</div>


        <div className='w-full  md:h-[1240px]  m-auto flex justify-center  '>


          <div className='w-[550px] mt-4 h-[800px]   shadow-2xl rounded'>

            <h2 className='text-green-700 border text-center text-2xl'>Add New Question</h2>





          <div className='m-auto h-full'>
                   
           <form className='m-auto' action="">
             
             <div className=' flex flex-col py-2 px-4'>
              <label className='  text-green-500  '>Select a subject</label>
              <select onChange={(e)=>setSubject(e.target.value)} value={subject} id='subject' className='rounded border border-green-700 w-[250px] '> 
                <option value="">Select a subject</option>
                <option value='New'>Add new subject</option>
                {subjectOptions.map((options)=>{
                  <option key={options} value={options}>{options}</option>

                })}
               
              </select>

              <div className={subject =="New" ? "flex flex-col" :"hidden" }>

                <label htmlFor="form-control">Add a subject</label>
                <input onChange={(e)=>setNewSubject(e.target.value)} 
                className=' w-[400px] p-2 border border-green-700' type='text'/>

                <button onClick={handleAddSubject} type='button'
                 className='bg-green-500 mr-4 hover:bg-green-600 
                transition duration-300 ease-in-out
                 text-white p-3 rounded-md shadow-md'>Add</button>

              </div>

              
             </div>

             <div className='flex  py-2 px-4 flex-col'>
                 <label htmlFor='question' className='text-green-500'>Question</label>
                 <textarea value={question} onChange={(e)=>setQuestion(e.target.value)} className='border py-10 border-green-700' />
             </div>
             
             <div className=' flex flex-col py-2 px-4'>
              <label className='  text-green-500  '>Question Type</label>
              <select value={questionType} onChange={(e)=>setQuestionType(e.target.value)} className='rounded border border-green-700 w-[250px] '> 
                <option value={"single"}>Single</option>
                <option value={"multiple"}>Multiple</option>
              </select>
             </div>

             
             <div className='flex  py-2 px-4 flex-col'>
                 <label className='text-green-500'>choice</label>
                  <div className='flex flex-row justify-between'>
                  <input onChange={(e)=>setChoice(e.target.value)} className=' w-[400px] p-2 border border-green-700' type='text'></input>
                  <button className='bg-green-500 mr-4 hover:bg-green-600 transition duration-300 ease-in-out
                   text-white p-3 rounded-md shadow-md'>Remove</button>
                  </div>

                  <button type='button' className='mt-2  w-[185px] bg-transparent border border-green-500
                   text-green-500 font-semibold py-2 px-4 rounded
                    hover:bg-green-600 hover:text-white
                    transition duration-300 ease-in-out'>Add choice</button>
             </div>

              <div className='flex  py-5 px-4 flex-col'>
            
                <label  className='  text-green-500  '>Correct answer</label>
                <input className=' py-4 w-[400px] border border-green-700' type='text'/>

                <div className=''>

                  <button  type='button'className='bg-green-500 mr-4 hover:bg-green-600 transition 
                  duration-300 ease-in-out text-white p-3 rounded-md shadow-md'>Save Question</button>
                  <button type='button' className='mt-3   bg-transparent border border-green-500
                   text-green-500 font-semibold py-3 px-4 rounded
                    hover:bg-green-600 hover:text-white
                    transition duration-300 ease-in-out'>Back to existing question </button>

                </div>

             
                 
             </div> 



           </form>

            </div>

             




               </div>




               
            
     




            </div>




















             </div>
              
           

      

  )
}

export default AddQuestions
