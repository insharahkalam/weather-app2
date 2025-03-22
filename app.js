

let city = prompt("Please Enter City Name.");

if(city==="karachi"){


document.write(`
    <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
        <div class="card animate__animated animate__flipInY" style="animation-duration: 2s; width: 23rem; height: 31rem; background-color:  rgb(252, 230, 199); box-shadow: 3px 3px 30px rgb(255, 178, 178);">
            <img width="100" height="200" src="./images/karachi.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-title text-center">KARACHI</h2>
                <h6>The average yearly temperature in Karachi is around</h6> 
                <h3 class="deg text-center">27°C</h3>
                <h6>This is the normal temperature throughout the year, combining both summer and winter.</h6>
                <a href="#" class="btn btn-secondary"><h6>Summer average (May-June): 37°C</h6></a>
                <a href="#" class="btn btn-secondary mt-2"><h6>Winter average (Dec-Jan): 26°C</h6></a>
            </div>
        </div> 

      
    <div class="guide text-white border-2 box-shadow: 3px 3px 30px rgb(255, 178, 178);"> <h5>User's Guide: </h5>
      <span class="text-white">You can put following cities name: </span>
      <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>

   </div>

    </div>
`);
}

else if(city==="istanbul"){
    document.write(`
        <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
            <div class="card animate__animated animate__flipInY" style="width: 23rem; height: 31rem ; animation-duration: 2s;  background-color:  rgb(252, 230, 199); box-shadow: 3px 3px 30px rgb(255, 178, 178);">
                <img width="100" height="200" src="./images/istanbul.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title text-center">ISTANBUL</h2>
                    <h6>The average yearly temperature in Istanbul is around</h6> 
                    <h3 class="deg text-center"> 15.6°C</h3>
                    <h6>This is the normal temperature throughout the year, combining both summer and winter.</h6>
                    <a href="#" class="btn btn-secondary"><h6>Summer average (May-June): 18°C - 27°C</h6></a>
                    <a href="#" class="btn btn-secondary mt-2"><h6> Winter average (Dec-Jan): 5°C - 10°C </h6></a>
                </div>
            </div> 

      
            <div class="guide text-white border-2 box-shadow: 3px 3px 30px rgb(255, 178, 178);"> <h5>User's Guide: </h5>
            <span class="text-white">You can put following cities name: </span>
            <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>
      
         </div>

        </div>
    `);
    
}

else if(city==="london"){
    document.write(`
        <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
            <div class="card animate__animated animate__flipInY" style="width: 23rem; height: 31rem; animation-duration: 2s; background-color:  rgb(252, 230, 199); box-shadow: 3px 3px 30px rgb(255, 178, 178);">
                <img width="100" height="200" src="./images/london.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title text-center">LONDON</h2>
                    <h6>The average yearly temperature in London is around</h6> 
                    <h3 class="deg text-center">11.5°C</h3>
                    <h6>This is the normal temperature throughout the year, combining both summer and winter.</h6>
                    <a href="#" class="btn btn-secondary"><h6>Summer average (May-June): 16°C - 22°C</h6></a>
                    <a href="#" class="btn btn-secondary mt-2"><h6>Winter average (Dec-Jan): 5°C - 9°C</h6></a>
                </div>
            </div> 

      
            <div class="guide text-white border-2 box-shadow: 3px 3px 30px rgb(255, 178, 178);"> <h5>User's Guide: </h5>
            <span class="text-white">You can put following cities name: </span>
            <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>
      
         </div>

        </div>
    `);
    
}

else if(city==="tokyo"){
    document.write(`
        <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
            <div class="animate__animated animate__flipInY card" style="width: 23rem; height: 31rem; animation-duration: 2s; background-color:  rgb(252, 230, 199); box-shadow: 3px 3px 30px rgb(255, 178, 178);">
                <img width="100" height="200" src="./images/tokyo.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title text-center">TOKYO</h2>
                    <h6>The average yearly temperature in Tokyo is around</h6> 
                    <h3 class="deg text-center">15.6°C</h3>
                    <h6>This is the normal temperature throughout the year, combining both summer and winter.</h6>
                    <a href="#" class="btn btn-secondary"><h6>Summer average (May-June): 21°C - 24°C </h6></a>
                    <a href="#" class="btn btn-secondary mt-2"><h6>Winter average (Dec-Jan): 4°C - 12°C </h6></a>
                </div>
            </div> 

        
    <div class="guide text-white border-2 box-shadow: 3px 3px 30px rgb(255, 178, 178);"> <h5>User's Guide: </h5>
      <span class="text-white">You can put following cities name: </span>
      <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>

   </div>

        </div>
    `);
    
}

else if(city==="beijing"){
    document.write(`
        <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
            <div class="card animate__animated animate__flipInY" style="width: 23rem; height: 31rem; animation-duration: 2s; background-color:  rgb(252, 230, 199); box-shadow: 3px 3px 30px rgb(255, 178, 178);">
                <img width="100" height="200" src="./images/beijing.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title text-center">BEIJING</h2>
                    <h6>The average yearly temperature in BEIJING is around</h6> 
                    <h3 class="deg text-center"> 12.7°C</h3>
                    <h6>This is the normal temperature throughout the year, combining both summer and winter.</h6>
                    <a href="#" class="btn btn-secondary"><h6>Summer average (May-June): 20°C - 27°C</h6></a>
                    <a href="#" class="btn btn-secondary mt-2"><h6>Winter average (Dec-Jan):-5°C - 4C</h6></a>
                </div>
            </div> 

    <div class="guide text-white border-2 box-shadow: 3px 3px 30px rgb(255, 178, 178);"> <h5>User's Guide: </h5>
      <span class="text-white">You can put following cities name: </span>
      <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>

   </div>

        </div>
    `);
    
}

else if(city==="moscow"){
    document.write(`
        <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
        <div class="card animate__animated animate__flipInY" style="width: 23rem; height: 31rem; animation-duration: 2s; box-shadow: 3px 3px 30px rgb(255, 178, 178);  background-color:  rgb(252, 230, 199);">
        <img width="100" height="200" src="./images/moscow.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h2 class="card-title text-center">MOSCOW</h2>
                    <h6>The average yearly temperature in Moscow is around</h6> 
                    <h3 class="deg text-center">5.8°C</h3>
                    <h6>This is the normal temperature throughout the year, combining both summer and winter.</h6>
                    <a href="#" class="btn btn-secondary"><h6>Summer average (May-June): 13°C - 22°C</h6></a>
                    <a href="#" class="btn btn-secondary mt-2"><h6>Winter average (Dec-Jan): -10°C - -6°C</h6></a>
                </div>
            </div>  
      
    <div class="guide text-white border-2 box-shadow: 3px 3px 30px rgb(255, 178, 178);"> <h5>User's Guide: </h5>
      <span class="text-white">You can put following cities name: </span>
      <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>

   </div>
        </div>
    `);
    
}

else if(city==="dubai"){
    document.write(`
        <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
            <div class="card animate__animated animate__flipInY" style="width: 23rem; height: 31rem; animation-duration: 2s; box-shadow: 3px 3px 30px rgb(255, 178, 178);  background-color:  rgb(252, 230, 199);">
                <img width="100" height="200" src="./images/dubai.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title text-center">DUBAI</h2>
                    <h6>The average yearly temperature in Dubai is around</h6> 
                    <h3 class="deg text-center">28°C</h3>
                    <h6>This is the normal temperature throughout the year, combining both summer and winter.</h6>
                    <a href="#" class="btn btn-secondary"><h6>Summer average (May-June): 31°C - 40°C </h6></a>
                    <a href="#" class="btn btn-secondary mt-2"><h6>Winter average (Dec-Jan): 16°C - 25°C</h6></a>
                </div>
            </div>
        
    <div class="guide text-white border-2 box-shadow: 3px 3px 30px rgb(255, 178, 178);"> <h5>User's Guide: </h5>
      <span class="text-white">You can put following cities name: </span>
      <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>

   </div>
            
        </div>
    `);
    
}

else if(city==="paris"){
    document.write(`
        <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
            <div class="card animate__animated animate__flipInY" style="width: 23rem; height: 31rem; animation-duration: 2s; box-shadow: 3px 3px 30px rgb(255, 178, 178);  background-color:  rgb(252, 230, 199);">
                <img width="100" height="200" src="./images/paris.webp" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title text-center">PARIS</h2>
                    <h6>The average yearly temperature in Paris is around</h6> 
                    <h3 class="deg text-center">12°C°C</h3>
                    <h6>This is the normal temperature throughout the year, combining both summer and winter.</h6>
                    <a href="#" class="btn btn-secondary"><h6>Summer average (May-June): 13°C - 24°C</h6></a>
                    <a href="#" class="btn btn-secondary mt-2"><h6>Winter average (Dec-Jan): 1°C - 7°C</h6></a>
                </div>
            </div>
            <div class="guide text-white border-2 box-shadow: 3px 3px 30px rgb(255, 178, 178);"> <h5>User's Guide: </h5>
      <span class="text-white">You can put following cities name: </span>
      <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>

   </div>
            
        </div>
    `);
    
}

else if(city==="sheikhpura"){
    document.write(`
        <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
            <div class="card animate__animated animate__flipInY" style="width: 23rem; height: 31rem; animation-duration: 2s; box-shadow: 3px 3px 30px rgb(255, 178, 178);  background-color:  rgb(252, 230, 199);">
                <img width="100" height="200" src="./images/sheikhpura.webp" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title text-center">SHEIKHPURA</h2>
                    <h6>The average yearly temperature in Sheikhpura is around</h6> 
                    <h3 class="deg text-center">23°C</h3>
                    <h6>This is the normal temperature throughout the year, combining both summer and winter.</h6>
                    <a href="#" class="btn btn-secondary"><h6>Summer average (May-June): 27°C - 38°C</h6></a>
                    <a href="#" class="btn btn-secondary mt-2"><h6>Winter average (Dec-Jan): 7°C - 20°C</h6></a>
                </div>
            </div> 
<div class="guide text-white border-2 box-shadow: 3px 3px 30px rgb(255, 178, 178);"> <h5>User's Guide: </h5>
      <span class="text-white">You can put following cities name: </span>
      <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>

   </div>

        </div>
    `);
    
}

else if(city==="delhi"){
    document.write(`
        <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
            <div class="card animate__animated animate__flipInY" style="width: 23rem; height: 31rem; animation-duration: 2s; box-shadow: 3px 3px 30px rgb(255, 178, 178);  background-color:  rgb(252, 230, 199);">
                <img width="100" height="200" src="./images/delhi.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title text-center">DELHI</h2>
                    <h6>The average yearly temperature in Delhi is around</h6> 
                    <h3 class="deg text-center"> 24.6°C</h3>
                    <h6>This is the normal temperature throughout the year, combining both summer and winter.</h6>
                    <a href="#" class="btn btn-secondary"><h6>Summer average (May-June): 27°C - 40°C </h6></a>
                    <a href="#" class="btn btn-secondary mt-2"><h6>Winter average (Dec-Jan):8.3°C - 20.0°C</h6></a>
                </div>
            </div> 
<div class="guide text-white border-2 box-shadow: 3px 3px 30px rgb(255, 178, 178);"> <h5>User's Guide: </h5>
      <span class="text-white">You can put following cities name: </span>
      <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>

   </div>

        </div>
    `);
    
}

else if(city==="madrid"){
    document.write(`
        <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
            <div class="card animate__animated animate__flipInY" style="width: 23rem; height: 31rem; animation-duration: 2s; box-shadow: 3px 3px 30px rgb(255, 178, 178);  background-color:  rgb(252, 230, 199);">
                <img width="100" height="200" src="./images/madrid.avif" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title text-center">MADRID</h2>
                    <h6>The average yearly temperature in Madrid is around</h6> 
                    <h3 class="deg text-center">14.5°C</h3>
                    <h6>This is the normal temperature throughout the year, combining both summer and winter.</h6>
                    <a href="#" class="btn btn-secondary"><h6>Summer average (May-June): 17°C - 22°C</h6></a>
                    <a href="#" class="btn btn-secondary mt-2"><h6>Winter average (Dec-Jan): 6°C - 9°C</h6></a>
                </div>
            </div> 
<div class="guide text-white border-2 box-shadow: 3px 3px 30px rgb(255, 178, 178);"> <h5>User's Guide: </h5>
      <span class="text-white">You can put following cities name: </span>
      <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>

   </div>

        </div>
    `);
    
}

else if(city==="berlin"){
    document.write(`
        <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
            <div class="card animate__animated animate__flipInY" style="width: 23rem; height: 31rem; animation-duration: 2s; box-shadow: 3px 3px 30px rgb(255, 178, 178);  background-color:  rgb(252, 230, 199);">
                <img width="100" height="200" src="./images/berlin.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title text-center">BERLIN</h2>
                    <h6>The average yearly temperature in Berlin is around</h6> 
                    <h3 class="deg text-center">10.1°C</h3>
                    <h6>This is the normal temperature throughout the year, combining both summer and winter.</h6>
                    <a href="#" class="btn btn-secondary"><h6>Summer average (May-June): 13°C - 22°C</h6></a>
                    <a href="#" class="btn btn-secondary mt-2"><h6>Winter average (Dec-Jan): -1°C - 3.5°C°C</h6></a>
                </div>
            </div> 
<div class="guide text-white border-2 box-shadow: 3px 3px 30px rgb(255, 178, 178);"> <h5>User's Guide: </h5>
      <span class="text-white">You can put following cities name: </span>
      <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>

   </div>

        </div>
    `);
    
}

else if(city==="sargodha"){
    document.write(`
        <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
            <div class="card animate__animated animate__flipInY" style="width: 23rem; height: 31rem; animation-duration: 2s; box-shadow: 3px 3px 30px rgb(255, 178, 178);  background-color:  rgb(252, 230, 199);">
                <img width="100" height="200" src="./images/sargodha.webp" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title text-center">SARGODHA</h2>
                    <h6>The average yearly temperature in Sargodha is around</h6> 
                    <h3 class="deg text-center">23.9°C</h3>
                    <h6>This is the normal temperature throughout the year, combining both summer and winter.</h6>
                    <a href="#" class="btn btn-secondary"><h6>Summer average (May-June): 27°C - 40°C</h6></a>
                    <a href="#" class="btn btn-secondary mt-2"><h6>Winter average (Dec-Jan): 5.6°C - 19.4°C</h6></a>
                </div>
            </div> 
<div class="guide text-white border-2 box-shadow: 3px 3px 30px rgb(255, 178, 178);"> <h5>User's Guide: </h5>
      <span class="text-white">You can put following cities name: </span>
      <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>

   </div>

        </div>
    `);
    
}

else if(city==="rome"){
    document.write(`
        <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
            <div class="card animate__animated animate__flipInY" style="width: 23rem; height: 31rem; animation-duration: 2s; box-shadow: 3px 3px 30px rgb(255, 178, 178);  background-color:  rgb(252, 230, 199);">
                <img width="100" height="200" src="./images/rome.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title text-center">ROME</h2>
                    <h6>The average yearly temperature in Rome is around</h6> 
                    <h3 class="deg text-center">15.8°C</h3>
                    <h6>This is the normal temperature throughout the year, combining both summer and winter.</h6>
                    <a href="#" class="btn btn-secondary"><h6>Summer average (May-June): 17°C - 22°C</h6></a> 
                    <a href="#" class="btn btn-secondary mt-2"><h6>Winter average (Dec-Jan): 6°C - 9°C</h6></a>
                </div>
            </div> 
<div class="guide text-white border-2 box-shadow: 3px 3px 30px rgb(255, 178, 178);"> <h5>User's Guide: </h5>
      <span class="text-white">You can put following cities name: </span>
      <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>

   </div>

        </div>
    `);
    
}

else if(city==="larkan"){
    document.write(`
        <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
            <div class="card animate__animated animate__flipInY" style=" width: 23rem; height: 31rem; animation-duration: 2s; box-shadow: 3px 3px 30px rgb(255, 178, 178);  background-color:  rgb(252, 230, 199);">
                <img width="100" height="200" src="./images/larkan.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title text-center">LARKAN</h2>
                    <h6>The average yearly temperature in Larkan is around</h6> 
                    <h3 class="deg text-center">33.4°C</h3>
                    <h6>This is the normal temperature throughout the year, combining both summer and winter.</h6>
                    <a href="#" class="btn btn-secondary"><h6>Summer average (May-June): 42°C - 43°C</h6></a>
                    <a href="#" class="btn btn-secondary mt-2"><h6>Winter average (Dec-Jan): 23.9°C - 24.4°C</h6></a>
                </div>
            </div> 
<div class="guide text-white border-2 box-shadow: 3px 3px 30px rgb(255, 178, 178);"> <h5>User's Guide: </h5>
      <span class="text-white">You can put following cities name: </span>
      <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>

   </div>

        </div>
    `);
    
}else{
    document.write(`  <div class="main d-flex p-4  flex-column  align-items-center bg-black" style=" overflow-y: hidden;">
            <div class="card animate__animated animate__flipInY" style=" width: 23rem; height: 31rem; box-shadow: 3px 3px 30px rgb(255, 178, 178); animation-duration: 2s; background-color:  rgb(252, 230, 199);">
                <img width="100" height="250" src="./images/tryy.jpg" class="card-img-top" alt="...">
                
                <div class="card-body">
                    <h2 class="card-title text-center">Sorry!</h2>
                <h5>This is not Store in Data Base. Try Again & Follow User's Guide.</h5>
                 <a href="#" class="btn btn-secondary mt-2"><h6>Enter A Valid City Name.</h6></a>
                </div>
            </div>
            
            <div class="guide text-white"> <h5>User's Guide: </h5>
      <span class="text-white">You can put following cities name: </span>
      <span class="text-white"> karachi, istanbul, london, tokyo, beijing, moscow, dubai, paris, sheikhpura, delhi, madrid, berlin, sargodha, rome, larkan.</span>

   </div>

   </div> `)
}

