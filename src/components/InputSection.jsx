// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// export default function InputSection() {
//   const [inputData, setInputData] = React.useState('');
//   const navigate=useNavigate();
//   const handleJoin=()=>{
//     navigate(`/room/${inputData}`);
//   }
//   return (
//     <>    
//     <div className='flex items-center justify-center  transform translate-y-[50%]'>
//       <input type="text" placeholder='Room ID' className='border border-black p-2 mr-2 w-[200px] h-[40px] bg-[#f0f1ff] text-[#2b2b2b] ' value={inputData}
//       onChange={(e)=>setInputData(e.target.value)}/>
//       <button className='bg-[#2b2b2b] cursor-pointer p-2 h-[40px] w-[100px] text-[#f0f1ff] '
//       onClick={handleJoin}>Join</button>

//     </div>
//     </>
//   )
// }
