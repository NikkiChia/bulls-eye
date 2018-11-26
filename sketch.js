function setup() {
	createCanvas(windowWidth, windowHeight);
	
background('#FDFEFE');
	bigcircle (600,600)
	bigcircle (300,300)
	bigcircle (-20,450)
	bigcircle (800,200)
	bigcircle (900,900)
	bigcircle (1000,500)
	bigcircle (200,800)
	bigcircle (1300,300)
	bigcircle (1300,800)
	smallcircle(100,100)
	smallcircle(200,200)
	smallcircle(300,900)
	smallcircle(700,300)
	smallcircle(1100,200)
	smallcircle(1200,600)
	smallcircle(150,650)

}

function smallcircle(X,Y) {
ellipseMode(CENTER)
	fill(0,0,0)
	ellipse (X,Y,100,100)
	fill('#FDFEFE')
	ellipse (X,Y,75,75)
	fill(0,0,0)
	ellipse (X,Y,50,50)
	fill('#FDFEFE')
	ellipse (X,Y,25,25)
}

function bigcircle(X,Y) {
	fill(0,0,0)
	ellipse (X,Y,300,300)
	fill('#FDFEFE')
	ellipse (X,Y,225,225)
	fill(0,0,0)
	ellipse (X,Y,150,150)
	fill('#FDFEFE')
	ellipse (X,Y,100,100)
}

function mousePressed(){
	smallcircle(mouseX,mouseY)	
}
