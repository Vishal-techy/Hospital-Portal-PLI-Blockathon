import React from 'react'
import styles from '../styles/inputpage.module.css'
import Image from 'next/image'
import home from '../public/home.png'
import notf from '../public/notf.png'
import prof from '../public/prof.png'
import done from '../public/done.png'
// import { TagsInput } from 'react-tag-input-component'



function inputpage() {
  return (
    
<main>
         
<div className={styles.Topbar} >

               <div className={styles.Searchbox}>

                   <div className={styles.homebox3}>
                     {/* <Image
                  src={search}
                  /> */}
                   </div>
  
                   <p  className={styles.Searchboxtext}>Search</p>
              </div>


<div className={styles.Topbar2}>

        <div className={styles.homebox}> 
        <Image
        src={home}
        />
        </div>

      <div className={styles.homebox2}>
        <Image
        src={notf}
        />
      </div>

     <div className={styles.homebox4}>
      <Image
      src={prof}
      />
     </div>

             <p className={styles.hometxt}>Surya Narayanan</p>

      <div className={styles.homebox2}> 
      <Image
      src={done}
      />
      </div>

</div>{/* topbar 2end */}
</div>{/* topbar1end */}



<div className={styles.backgroundBox}>

     <h1 className={styles.heading}>UPDATE - Surya's Health Records </h1>


<div className={styles.inputflexbox}>

      <div className={styles.insideinputflexbox}> 
        <input 
        placeholder=' Patient Name'
        className={styles.inputbox}
        />
        
        <input 
        placeholder=' Report Generated Date'
        className={styles.inputbox}
        />
      
        <input 
        placeholder=' Doctor Name'
        className={styles.inputbox}
        />
      
        <input 
        placeholder=' Report Type'
        className={styles.inputbox}
        />
      </div>


      <div className={styles.insideinputflexbox2}>
         <input 
         placeholder=' Patient ID'
         className={styles.inputbox2}
         />
      
         <input 
         placeholder=' Hospital Name & ID'
         className={styles.inputbox2}
         />
      
         <input 
         placeholder=' Doctor Mobile No'
         className={styles.inputbox2}
         />
      
         <input 
         placeholder=' Patient Suffering From'
         className={styles.inputbox2}
         />
       </div>
</div>  {/* inputflex box ends */}

     <div className={styles.uploadbtnbg}>
           <div  className={styles.uploadbtn}>
               <h1 className={styles.uploadbtntxt}>Scan the Report To Upload</h1>
           </div>
     </div>


     <div className={styles.uploadbtnbg}>
           <div  className={styles.uploadbtn2}>
               <h1 className={styles.uploadbtntxt2}>Upload Records</h1>
           </div>
     </div>


       
</div>   {/* backgroundbox divend */}
















</main>





  

























  )
}

export default inputpage