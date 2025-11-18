function abrirModal(elemento) {
  const imagen = elemento.querySelector('.mes-imagen');
  const modal = document.getElementById('modal');
  const modalImagen = document.getElementById('modal-imagen');
  
  modalImagen.src = imagen.src;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; 
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    cerrarModal();
  }
});