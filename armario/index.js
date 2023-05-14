function mudarEstado() {

    const btn = event.target;
    
    const armario = btn.parentNode;

    const tipo = armario.querySelector(".tipo1, .tipo2, .tipo3");
  
    if (tipo.classList.contains("tipo1")) {
     
      tipo.classList.remove("tipo1");
      tipo.classList.add("tipo2");
      tipo.innerHTML = "<h5>Ocupado</h5>";

    } 
    
    else if (tipo.classList.contains("tipo2")) {
      
        tipo.classList.remove("tipo2");
        tipo.classList.add("tipo3");
        tipo.innerHTML = "<h5>Manutenção</h5>";

    } 
    
    else {
      
        tipo.classList.remove("tipo3");
        tipo.classList.add("tipo1");
        tipo.innerHTML = "<h5>Disponível</h5>";

    }

}
  



