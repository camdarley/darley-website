// Les petits poissons
// Copyright Frank Milard - http://www.asaisir.com/a-la-page
import nameSP2a from "../images/marcassin1.gif";
import nameSP2b from "../images/marcassin2.gif";

const heightSP2 = 20;
const widthSP2 = 35;

const objSP2 = [];
const numObjSP2 = 6;
let ptrSP2 = 0;

let xborneSP2 = 100;
let yborneSP2 = 100;
let xaqSP2 = xborneSP2;
let yaqSP2 = yborneSP2;
let xcaqSP2 = xborneSP2;
let ycaqSP2 = yborneSP2;

let fSP2 = 0;

function animObjSP2() {
  if (fSP2 == 0) {
    this.d ? (this.x += 2) : (this.x -= 2);
    if (this.x >= xborneSP2) {
      this.x = xborneSP2;
      this.changedir();
    }
    if (this.x <= -xborneSP2) {
      this.x = -xborneSP2;
      this.changedir();
    }

    if (Math.round(Math.random() * (this.s + 1) * 60) == 1) this.changedir();
  }

  const t = Math.round(Math.random() * (this.s + 1) * 10);
  if (t == 2 && this.y < yborneSP2) this.y++;
  if (t == 1 && this.y > -yborneSP2) this.y--;

  this.layer.style.left = this.x + xaqSP2 + 'px';
  this.layer.style.top = this.y + yaqSP2 + 'px';
}

function changedirObjSP2() {
  if (this.d == 0) {
    this.d = 1;
    this.layer.style.background = `url('${nameSP2b}')`;
  } else {
    this.d = 0;
    this.layer.style.background = `url('${nameSP2a}')`;
  }
}

function defObjSP2(ID) {
  this.layer = document.getElementById('SP2' + ID);
  this.d = Math.round(Math.random());
  this.s = Math.round(Math.random());
  this.x = Math.round(Math.random() * 2 * xborneSP2) - xborneSP2;
  this.y = Math.round(Math.random() * 2 * yborneSP2) - yborneSP2;

  this.layer.style.background = this.d == 0 ? `url('${nameSP2a}')` : `url('${nameSP2b}')`;

  this.anim = animObjSP2;
  this.changedir = changedirObjSP2;
}

function animSP2() {
  const dx = xcaqSP2 - xaqSP2;
  if (Math.abs(dx) > 2) {
    let ix = Math.round(dx / 10);
    if (Math.abs(ix) < 2) ix = dx > 0 ? 2 : -2;
    xaqSP2 += ix;
    fSP2 = 1;
  } else {
    xaqSP2 = xcaqSP2;
    fSP2 = 0;
  }

  if (ycaqSP2 != yaqSP2) yaqSP2 += Math.round((ycaqSP2 - yaqSP2) / 10);

  for (let x = 0; x < numObjSP2; x++) {
    if (dx != 0) {
      if (dx < 0 && objSP2[x].d == 1) objSP2[x].changedir();
      if (dx > 0 && objSP2[x].d == 0) objSP2[x].changedir();
    }
    objSP2[x].anim();
  }
}

function mouseEventSP2(e) {
  xcaqSP2 = e.clientX + document.documentElement.scrollLeft;
  ycaqSP2 = e.clientY + document.documentElement.scrollTop;
}

function initSP2() {
  for (let x = 0; x < numObjSP2; x++) {
    const wrapper = document.createElement('div');
    wrapper.id = 'SP2' + x;
    wrapper.style.position = 'absolute';
    wrapper.style.visibility = 'visible';
    wrapper.style.height = heightSP2 + 'px';
    wrapper.style.width = widthSP2 + 'px';
    wrapper.style.backgroundSize = 'contain';
    wrapper.style.pointerEvents = 'none';
    wrapper.style.background = `url('${nameSP2a}')`;

    document.body.appendChild(wrapper);
  }
  
  for (let x = 0; x < numObjSP2; x++) {
    objSP2[x] = new defObjSP2(x);
  }
  
  document.onmousemove = mouseEventSP2;
  setInterval(animSP2, 50);
}

// Export the initialization function
export { initSP2 };