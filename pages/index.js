import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import mypic from '../public/blackboxgraph.png'
import home from '../public/home.png'
import notf from '../public/notf.png'
import search from '../public/search.png'
import prof from '../public/prof.png'
import done from '../public/done.png'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emergent</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  <main className={styles.main}>
       
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

     </div>
            
    </div>



     <div className={styles.mainbox}>

        <div className={styles.mainbox1}>

            <div className={styles.mainsubbox1}>
                <h2 className={styles.mainsubbox1txt} > Dashboard </h2>
                <div className={styles.redbox} >Emergency</div>
            </div>
                    
             <div className={styles.mainsubbox2}>

                   <div className={styles.box1}>
                      <h2 className={styles.box1txt}>Quick Links</h2>
                    <u className={styles.uline}><h2 className={styles.box1txt2}>Recent Surgey Results</h2></u>  
                    <u className={styles.uline}><h2 className={styles.box1txt2}>Regular Checkup Records</h2></u> 
                    <u className={styles.uline}> <h2 className={styles.box1txt2}>Medication Records</h2></u>
                    <h2 className={styles.box1txt3}>Update Patients Record</h2> 
                   </div>

                   <div className={styles.box2}>
                   <h2 className={styles.box2txt}>Recent Medical</h2>
                   <h2 className={styles.box2txt2}>Activities</h2>
                   <u className={styles.uline}><h2 className={styles.box1txt2}>Click Here</h2></u>   
                   </div>

                   <div className={styles.box}>
                     <h2 className={styles.box3txt1}>Apollo Hospital</h2>
                     <h2 className={styles.box3txt2}>Heart Surgery</h2>
                     <h2 className={styles.box3txt3}>20/07/2022</h2>
                   </div>

                   <div className={styles.box}>
                     <h2 className={styles.box3txt1}>Apollo Hospital</h2>
                     <h2 className={styles.box3txt2}>Full Body Checkup</h2>
                     <h2 className={styles.box4txt3}>09/04/2020</h2>
                   </div>

                   <div className={styles.box}>
                     <h2 className={styles.box3txt1}>Apollo Hospital</h2>
                     <h2 className={styles.box3txt2}>kidney Surgery</h2>
                     <h2 className={styles.box3txt3}>30/05/2017</h2>
                   </div>

             </div>       


<div className={styles.mainsubbox3}>
    <div className={styles.blackbox}>

        <div  className={styles.blackbox1}>
           <h3 className={styles.blackboxtxt1}>Health Graph</h3>
           <h2 className={styles.blackboxtxt2}>Surya Narayanan</h2>
           <h4 className={styles.blackboxtxt3}>On 8th September, Surya Narayanan has undergone a regular health check up at the Apollo Hospital, Chennai. Treatment provided by Dr. V. Ragavendran at 6PM in the evening.</h4>
        </div>

                <div  className={styles.hlinebox}>  <div className={styles.hline} /></div> 
               

        <div className={styles.blackbox2}>
               <Image
               src={mypic}
               />
        </div>

    </div>
</div>


<div className={styles.mainsubbox3}>
    <div className={styles.whitebox}>

      <div className={styles.wbox1}>
         <h2 className={styles.wbox1txt}>Undergoing Medications</h2>
         <h4 className={styles.wboxtxt2}>View All Activities</h4>
      </div>
      
       <div className={styles.wbox2}>
           <u className={styles.uline}><h2 className={styles.wbox2txt1}>Medication</h2></u>
           <u className={styles.uline}><h2 className={styles.wbox2txt}>Duration</h2></u>
           <u className={styles.uline}><h2 className={styles.wbox2txt}>Recommended By</h2></u>
           <u className={styles.uline}><h2 className={styles.wbox2txt}>Provided for</h2></u>
       </div>

       <div className={styles.wbox2}>
           <h2 className={styles.wbox3txt1}>Paracetomal(500mg)</h2>
           <h2 className={styles.wbox3txt2}>2Days</h2>
           <h2 className={styles.wbox3txt3}>Dr.V.V.Raghavenran</h2>
           <h2 className={styles.wbox2txt}>Regular Fever</h2>
       </div> 

       <div  className={styles.hr} />

       <div className={styles.wbox2}>
           <h2 className={styles.wbox3txt11}>Metformin(100mg)</h2>
           <h2 className={styles.wbox3txt22}>1.5 Years</h2>
           <h2 className={styles.wbox3txt3}>Dr.G.Ramamorthy</h2>
           <h2 className={styles.wbox2txt}>Diabetes(type 20)</h2>
       </div> 

       <div  className={styles.hr} />

       <div className={styles.wbox2}>
           <h2 className={styles.wbox4txt1}>Lecope(30mg)</h2>
           <h2 className={styles.wbox4txt2}>7Days</h2>
           <h2 className={styles.wbox4txt3}>Dr.k.Nandha</h2>
           <h2 className={styles.wbox2txt}>Allergy Treatment</h2>
       </div> 

       
     
     



    </div>
</div>

        </div>


        <div className={styles.mainbox2}>

          <u className={styles.uline}> <h2 className={styles.mainsubbox2txt} >Drugs allergic to </h2></u>
            <div className={styles.miniwbox}>
                <div className={styles.miniwbox1}>
                  <div className={styles.lisubbox}>
                     <div className={styles.libox}></div>

                     <div className={styles.twords}>
                       <h3 className={styles.txtwbox}>Amoxicillin</h3>
                       <h4 className={styles.txtwbox2}>Since 2002</h4>
                     </div>
                     
                     
                  </div>
                  <u className={styles.uline2}><h3 className={styles.get}>Get Details</h3></u>
                </div>
                <div className={styles.hr2}></div>





                <div className={styles.miniwbox1}>
                  <div className={styles.lisubbox}>
                     <div className={styles.libox}></div>

                     <div className={styles.twords}>
                       <h3 className={styles.txtwbox}>Antibiotics</h3>
                       <h4 className={styles.txtwbox2}>Since 2002</h4>
                     </div>
                     
                     
                  </div>
                  <u className={styles.uline2}><h3 className={styles.get}>Get Details</h3></u>
                </div>
                <div className={styles.hr2}></div>




                <div className={styles.miniwbox1}>
                  <div className={styles.lisubbox}>
                     <div className={styles.libox}></div>

                     <div className={styles.twords}>
                       <h3 className={styles.txtwbox}>Antibiotics</h3>
                       <h4 className={styles.txtwbox2}>Since 2002</h4>
                     </div>
                     
                     
                  </div>
                  <u className={styles.uline2}><h3 className={styles.get}>Get Details</h3></u>
                </div>
                
            </div>


            <div className={styles.bluebox}>
              <div  className={styles.blueboxdiv}><h2 className={styles.finaltxt}>Overall Health</h2></div>
               <h1 className={styles.finaltxt2}>98%Excellent</h1>
               <h2 className={styles.finaltxt3}>By Dr.V.Raghavendra</h2>
             <u className={styles.blue}><h1 className={styles.finaltxt4}>Check Entire Health Record</h1></u>  
            
            </div>

          </div>
      

          




      </div>
        

      
   </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}
 