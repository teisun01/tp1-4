class Cuad {
  constructor() {
    this.size = 60;
    this.color;
    this.rotacion = random([0, HALF_PI, PI, -HALF_PI]);
    //paleta de colores obtenida directamente de las obras
    this.colorPalette = [
      [222, 209, 68],    
      [33, 111, 139],   
      [220, 123, 21],   
      [77, 113, 121],   
      [107, 158, 178],  
      [206, 227, 222],  
      [187, 84, 19],   
      [37, 53, 25],  
      [141, 153, 56],  
      [76, 73, 57],   
      [123, 77, 81],   
      [113, 20, 21],    
      [145, 156, 131], 
      [36, 156, 207],  
      [126, 121, 50],  
      [143, 55, 17],    
      [181, 26, 13],  
      [158, 155, 17],   
      [53, 95, 80],     
      [110, 72, 45],    
      [205, 27, 18],    
      [96, 72, 82],      
      [166, 157, 46],
      [135, 190, 150],  
      [183, 110, 77]    
    ];
    
  }
//se dibujan los cuadrados en orden
  dibujar(cuadr) {
    for (let boxW = width; boxW > 0; boxW -= (this.size + 15)) {
      for (let boxH = height; boxH > 0; boxH -= (this.size + 15)) {
        const posX = width - boxW + 8;
        const posY = height - boxH + 8;
        this.dibujarCuadro(posX, posY, cuadr);
      }
    }
  }
//se define el diseño de los cuadrados
  dibujarCuadro(posX, posY, cuadr) {
    const randomColor = random(this.colorPalette);
    cuadr.tint(randomColor[0], randomColor[1], randomColor[2]);
    cuadr.image(cuadimg, posX, posY, this.size, this.size);

    const inSize = random(15, this.size);
//Se utiliza un random para que devuelva un numero y posicione a los cuadrados en la cuadricula
    if (random(0, 1) > 0.7) {
      cuadr.push();
      const randomColor = random(this.colorPalette);
      cuadr.tint(randomColor[0], randomColor[1], randomColor[2]);
      cuadr.translate(posX + this.size / 2, posY + this.size / 2);
      const rotation = this.rotacion;
      cuadr.rotate(rotation);
      cuadr.image(diagimg, -this.size / 2, -this.size / 2, this.size, this.size);
      cuadr.pop();
    } else {
      cuadr.push();
      const randomColor = random(this.colorPalette); 
      cuadr.tint(randomColor[0], randomColor[1], randomColor[2]);
      cuadr.translate(posX + this.size / 2, posY + this.size / 2);
      const rotation = this.rotacion;
      cuadr.rotate(rotation);
      cuadr.image(rectimg, -this.size / 2, -this.size / 2, this.size, this.size);
      cuadr.pop();
    }

    if (random(0, 1) > 0.9) {
      cuadr.push();
      const randomColor = random(this.colorPalette);
      cuadr.tint(randomColor[0], randomColor[1], randomColor[2]);
      cuadr.image(cuad1, posX, posY, this.size, this.size);
      cuadr.pop();
    }

    if (random(0, 5) < 0.2) {
      cuadr.push();
      cuadr.translate(posX + this.size / 2, posY + this.size / 2);
      const rotation = this.rotacion;
      cuadr.rotate(rotation);
      const randomColor = random(this.colorPalette);
      cuadr.tint(random(256), random(256), random(256, 20));
      cuadr.image(cuad2, -this.size / 2, -this.size / 2, this.size, this.size);
      cuadr.pop();
    } else if (random(0, 7) < 0.1) {
      cuadr.push();
      cuadr.translate(posX + this.size / 2, posY + this.size / 2);
      const rotation = this.rotacion;
      cuadr.rotate(rotation);
      cuadr.tint(255);
      cuadr.image(cuad2, -this.size / 2, -this.size / 2, this.size, this.size);
      cuadr.pop();
    } else if (random(0, 10) < 0.1) {
      cuadr.push();
      cuadr.translate(posX + this.size / 2, posY + this.size / 2);
      const rotation = this.rotacion;
      cuadr.rotate(rotation);
      const randomColor = random(this.colorPalette);
      cuadr.tint(randomColor[0], randomColor[1], randomColor[2]);
      cuadr.image(diagimg, -this.size / 2, -this.size / 2, this.size, this.size);
      cuadr.pop();
    }

    if (random(0, 8) < 0.3) {
      cuadr.push();
      const randomColor = random(this.colorPalette);
      cuadr.tint(randomColor[0], randomColor[1], randomColor[2]);
      cuadr.image(cuad3, posX, posY, this.size, this.size);
      cuadr.pop();
    } else if (random(0, 5) < 0.2) {
      cuadr.push();
      const randomColor = random(this.colorPalette);
      cuadr.tint(randomColor[0], randomColor[1], randomColor[2]);
      cuadr.image(cuad4, posX, posY, this.size, this.size);
      cuadr.pop();
    } else if (random(0, 6) < 0.2) {
      cuadr.push();
      const randomColor = random(this.colorPalette);
      cuadr.tint(randomColor[0], randomColor[1], randomColor[2]);
      cuadr.image(cuad5, posX, posY, this.size, this.size);
      cuadr.pop();
    }
  }
}