function generateQR() {
    const input = document.getElementById('qr');
    const size = document.getElementById('size').value;
    const img = document.getElementById('qrimg');
    const downloadBtn = document.getElementById('downloadBtn');
    const data = input.value.trim();

    if (!data) {
        alert("Por favor ingresa un texto o URL válido.");
        return;
    }

    // Generar QR usando la API pública
    img.src = `https://api.qr-server.com/v1/create-qr-code/?size=${size}&data=${encodeURIComponent(data)}`;
    
    // Configurar descarga cuando se cargue la imagen
    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);

        downloadBtn.href = canvas.toDataURL('image/png');
        downloadBtn.style.display = 'inline-block';